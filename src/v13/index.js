import registerGlobal from "./registerGlobal.js";

import renderTable from "./table/index.js";

const RENDERER_MAP = {
    table: renderTable
};

const render = ({
    type = "table",
    targetHtmlId,
    data,
    classToApply,
    inTargetHtmlId,
    inData,
    columns,
    inColumns,
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
    inShowLog
} = {}) => {
    const rawType = type;
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
    const localSkeletonType = inSkeletonType ?? skeletonType ?? variant ?? "default";
    const localShowLog = inShowLog ?? showLog ?? false;

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
