import skeletonToSpec from "../../../../../skeletonToSpec/v1/index.js";
import jsonToSpec from "../../../../../jsonToSpec/v2/index.js";
import jsonToTag from "../../../../../jsonToTag/v2/index.js";

import tableSkeleton from "./table/skeleton.json" with { type: "json" };
import tableFragments from "./table/fragments.json" with { type: "json" };
import tableClick from "./table/click/index.js";

import navTabsSkeleton from "./navTabs/skeleton.json" with { type: "json" };
import navTabsFragments from "./navTabs/fragments.json" with { type: "json" };

const buildTableData = ({ columns, data, colGroup, foot, config } = {}) => {
    let dataAsJson = {};
    dataAsJson.columns = columns;
    dataAsJson.data = data;
    dataAsJson.colGroup = colGroup;
    dataAsJson.foot = foot;
    dataAsJson.title = config?.title ?? config?.caption?.text ?? "";
    dataAsJson.footerText = config?.footerText ?? "";
    return dataAsJson;
};

const buildNavTabsData = ({ tabs, data } = {}) => {
    let tabsArray = [];

    if (Array.isArray(tabs) && tabs.length > 0) {
        tabsArray = tabs.map((tab, idx) => ({
            id: tab.id ?? `tab-${idx + 1}`,
            label: tab.label ?? tab.title ?? `Tab ${idx + 1}`,
            activeClass: tab.activeClass ?? (idx === 0 ? "active" : ""),
            showActiveClass: tab.showActiveClass ?? (idx === 0 ? "show active" : ""),
            isSelected: tab.isSelected ?? (idx === 0 ? "true" : "false"),
            content: tab.content ?? ""
        }));
    } else if (Array.isArray(data) && data.length > 0) {
        tabsArray = data.map((row, idx) => {
            const id = `tab-${row.VOUCHERNUMBER ?? row.id ?? idx + 1}`;
            const label = row.REFERENCE || row.VOUCHERTYPENAME || `Tab ${idx + 1}`;
            const isActive = idx === 0;
            return {
                id,
                label,
                activeClass: isActive ? "active" : "",
                showActiveClass: isActive ? "show active" : "",
                isSelected: isActive ? "true" : "false",
                content: ""
            };
        });
    }

    return { tabs: tabsArray };
};

const definitions = {
    table: {
        skeleton: tableSkeleton,
        fragments: tableFragments,
        buildData: buildTableData,
        click: tableClick
    },
    navTabs: {
        skeleton: navTabsSkeleton,
        fragments: navTabsFragments,
        buildData: buildNavTabsData
    }
};

const startFunc = ({
    targetHtmlId,
    inTargetHtmlId,
    type = "table",
    inType,
    inColumns,
    inData,
    inTabs,
    inColGroup,
    inFooterData = [],
    inConfig = {},
    inSkeletonType = "default",
    inShowLog = false
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId ?? targetHtmlId;
    const localType = inType ?? type;
    const localColumns = inColumns;
    const localData = inData;
    const localTabs = inTabs;
    const localColGroup = inColGroup;
    const localFooterData = inFooterData;
    const localConfig = inConfig;
    const localSkeletonType = inSkeletonType;
    const localShowLog = inShowLog;

    try {
        const selectedControl = definitions[localType] ?? definitions.table;

        const dataAsJson = selectedControl.buildData({
            columns: localColumns,
            data: localData,
            tabs: localTabs,
            colGroup: localColGroup,
            foot: localFooterData,
            config: localConfig
        });

        const rawSkeleton = selectedControl.skeleton[localSkeletonType] ?? selectedControl.skeleton.default ?? selectedControl.skeleton;
        const targetSkeleton = structuredClone(rawSkeleton);

        if (localShowLog) console.log(`${localType} targetSkeleton : `, targetSkeleton);

        const structureJson = skeletonToSpec({
            inSkeleton: targetSkeleton,
            inFragments: selectedControl.fragments
        });
        if (localShowLog) console.log(`${localType} structureJson : `, structureJson);

        const specAsJsonToDom = jsonToSpec({ specJson: structureJson, dataJson: dataAsJson, showLog: false });
        if (localShowLog) console.log(`${localType} specAsJsonToDom : `, specAsJsonToDom);

        const fromRenderer = jsonToTag(specAsJsonToDom);

        const html = (typeof localTargetHtmlId === "string")
            ? document.getElementById(localTargetHtmlId)
            : localTargetHtmlId;

        if (!html) return fromRenderer;

        if (selectedControl.click) {
            html.addEventListener('click', (event) => {
                selectedControl.click({
                    inEvent: event,
                    inData: localData,
                    inColumns: localColumns,
                    inRenderFunc: startFunc,
                    inTargetHtmlId: localTargetHtmlId
                });
            });
        }

        html.append(fromRenderer);
        return fromRenderer;
    } catch (error) {
        console.log("error : ", error);
    };
};

export { startFunc };
export default startFunc;
