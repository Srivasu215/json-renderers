import meta from "./meta.js";

export const registerGlobal = (inFuncDefinition) => {
    if (typeof globalThis === "undefined" || !inFuncDefinition) return;

    globalThis.ks ??= {};

    globalThis.ks.jsonRenderers = {
        meta,
        Table: inFuncDefinition
    };
};

export default registerGlobal;
