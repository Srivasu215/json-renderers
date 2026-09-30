import skeletonToSpec from "../../../../../skeletonToSpec/v1/index.js";
import jsonToSpec from "../../../../../jsonToSpec/v2/index.js";
import jsonToTag from "../../../../../jsonToTag/v2/index.js";

import tableSkeleton from "./table/skeleton.json" with { type: "json" };
import tableFragments from "./table/fragments.json" with { type: "json" };
import tableClick from "./table/click/index.js";

import navTabsSkeleton from "./navTabs/skeleton.json" with { type: "json" };
import navTabsFragments from "./navTabs/fragments.json" with { type: "json" };

const buildTableData = ({ inColumns, inData, inColGroup, inFoot, inConfig } = {}) => {
    const localColumns = inColumns;
    const localData = inData;
    const localColGroup = inColGroup;
    const localFoot = inFoot;
    const localConfig = inConfig;

    let dataAsJson = {};
    dataAsJson.columns = localColumns;
    dataAsJson.data = localData;
    dataAsJson.colGroup = localColGroup;
    dataAsJson.foot = localFoot;
    dataAsJson.title = localConfig?.title ?? localConfig?.caption?.text ?? "";
    dataAsJson.footerText = localConfig?.footerText ?? "";
    return dataAsJson;
};

const buildNavTabsData = ({ inData } = {}) => {
    const localData = inData;
    let dataArray = [];

    if (Array.isArray(localData) && localData.length > 0) {
        dataArray = localData.map((row, idx) => {
            const id = row.id ? (String(row.id).startsWith("tab-") ? row.id : `tab-${row.id}`) : (row.VOUCHERNUMBER ? `tab-${row.VOUCHERNUMBER}` : `tab-${idx + 1}`);
            const label = row.label || row.REFERENCE || row.VOUCHERTYPENAME || `Tab ${idx + 1}`;
            const isActive = idx === 0;
            return {
                ...row,
                id,
                label,
                activeClass: isActive ? "active" : "",
                showActiveClass: isActive ? "show active" : "",
                isSelected: isActive ? "true" : "false",
                content: row.content ?? ""
            };
        });
    }

    return { data: dataArray, tabs: dataArray };
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
    inTargetHtmlId,
    inType = "table",
    inColumns,
    inData,
    inColGroup,
    inFooterData = [],
    inConfig = {},
    inSkeletonType = "default",
    inShowLog = false
} = {}) => {
    const localTargetHtmlId = inTargetHtmlId;
    const localType = inType;
    const localColumns = inColumns;
    const localData = inData;
    const localColGroup = inColGroup;
    const localFooterData = inFooterData;
    const localConfig = inConfig;
    const localSkeletonType = inSkeletonType;
    const localShowLog = inShowLog;

    try {
        const selectedControl = definitions[localType] ?? definitions.table;

        const dataAsJson = selectedControl.buildData({
            inColumns: localColumns,
            inData: localData,
            inColGroup: localColGroup,
            inFoot: localFooterData,
            inConfig: localConfig
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
