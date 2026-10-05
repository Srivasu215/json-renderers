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
    columns,
    appendPosition
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
        inSkeletonType: localSkeletonType,
        inShowLog: localShowLog,
        inAppendPosition: appendPosition
    });
};

registerGlobal(render);

export default render;
