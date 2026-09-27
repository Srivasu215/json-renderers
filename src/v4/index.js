import registerGlobal from "./registerGlobal.js";

// import renderTable from "./table/index.js";
// import renderNavTabs from "./navTabs/index.js";
// import renderForm from "./form/index.js";

import renderDataList from "./dataLists/index.js";
import renderSelect from "./select/index.js";

// const RENDERER_MAP = {
//     table: renderTable,
//     navtabs: renderNavTabs,
//     nav: renderNavTabs,
//     tabs: renderNavTabs,
//     form: renderForm,
//     datalist: renderDataList,
//     "data-list": renderDataList
// };

const RENDERER_MAP = {
    datalist: renderDataList,
    select: renderSelect
};


/**
 * Unified Renderer
 * Dispatches to the corresponding renderer strategy (table, navTabs, form)
 * based on the provided type.
 */
const render = ({
    type = "table",
    inType,
    targetHtmlId,
    inTargetHtmlId,
    data,
    inData,
    columns,
    inColumns,
    fields,
    inFields,
    tabs,
    inTabs,
    options,
    inOptions,
    datalistId,
    inDatalistId,
    listId,
    inListId,
    id,
    valueField,
    inValueField,
    labelField,
    inLabelField,
    colGroup,
    inColGroup,
    footerData,
    inFooterData,
    config,
    inConfig,
    variant,
    skeletonType,
    inSkeletonType,
    showLog = false,
    inShowLog,
    ...restProps
} = {}) => {
    const rawType = inType ?? type;
    const resolvedType = typeof rawType === "string" ? rawType.toLowerCase() : "table";
    const renderer = RENDERER_MAP[resolvedType];

    if (!renderer) {
        console.error(
            `[Renderer] Unknown renderer type "${rawType}". Available types: ${Object.keys(RENDERER_MAP).join(", ")}`
        );
        return null;
    }

    const localTargetHtmlId = inTargetHtmlId ?? targetHtmlId;
    const localData = inData ?? data;
    const localColumns = inColumns ?? columns;
    const localFields = inFields ?? fields;
    const localTabs = inTabs ?? tabs;
    const localOptions = inOptions ?? options ?? localData;
    const localSkeletonType = inSkeletonType ?? skeletonType ?? variant ?? "default";
    const localShowLog = inShowLog ?? showLog ?? false;

    if (resolvedType === "form") {
        return renderer({
            targetHtmlId: localTargetHtmlId,
            inFields: localFields,
            inData: localData,
            inColumns: localColumns,
            inVariant: localSkeletonType,
            inSkeletonType: localSkeletonType,
            inShowLog: localShowLog,
            onSave: restProps?.onSave,
            afterSave: restProps?.afterSave,
            onNew: restProps?.onNew
        });
    }

    if (resolvedType === "navtabs" || resolvedType === "nav" || resolvedType === "tabs") {
        return renderer({
            targetHtmlId: localTargetHtmlId,
            inTabs: localTabs,
            inData: localData,
            inSkeletonType: localSkeletonType,
            inShowLog: localShowLog
        });
    }

    if (resolvedType === "datalist" || resolvedType === "data-list") {
        return renderer({
            targetHtmlId: localTargetHtmlId,
            inData: localData,
            inSkeletonType: localSkeletonType,
            inShowLog: localShowLog
        });
    }

    if (resolvedType === "select") {
        return renderer({
            targetHtmlId: localTargetHtmlId,
            inData: localData,
            inSkeletonType: localSkeletonType,
            inShowLog: localShowLog
        });
    };

    // Default to table renderer
    return renderer({
        targetHtmlId: localTargetHtmlId,
        inColumns: localColumns,
        inData: localData,
        inColGroup: inColGroup ?? colGroup,
        inFooterData: inFooterData ?? footerData ?? [],
        inConfig: inConfig ?? config ?? {},
        inSkeletonType: localSkeletonType,
        inShowLog: localShowLog
    });
};

registerGlobal(render);

export default render;
