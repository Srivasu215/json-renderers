import meta from "./meta.js";

export const registerGlobal = (inDefinition) => {
    const localDefinition = inDefinition;

    if (typeof globalThis === "undefined" || !localDefinition) return;

    globalThis.ks ??= {};

    const renderFunc = typeof localDefinition === "function"
        ? localDefinition
        : localDefinition.render;

    const getSpecFunc = typeof localDefinition === "object"
        ? localDefinition.getSpec
        : undefined;

    globalThis.ks.jsonRenderers = {
        meta,
        ...(typeof localDefinition === "object" ? localDefinition : {}),
        render: renderFunc,
        renderToDom: renderFunc,
        domMount: localDefinition?.renderToDom,
        ...(getSpecFunc ? { getSpec: getSpecFunc } : {})
    };
};

export default registerGlobal;
