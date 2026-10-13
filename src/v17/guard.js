import spec from "./spec.json" with { type: "json" };

const guardFunc = ({ inConfig } = {}) => {
    const localConfig = inConfig;

    if (!localConfig || typeof localConfig !== "object") {
        console.error("Config must be an object");
        throw new TypeError("Config must be an object");
    }

    // Dynamic schema validation against spec.json keys and types
    for (const key of Object.keys(spec)) {
        // 1. All keys are compulsory
        if (!(key in localConfig) || localConfig[key] === undefined) {
            console.error(`Missing compulsory key: "${key}"`);
            throw new Error(`Missing compulsory key: "${key}"`);
        }

        // 2. Type validation derived from spec.json
        if (Array.isArray(spec[key])) {
            if (!Array.isArray(localConfig[key])) {
                console.error(`${key} must be an Array`);
                throw new TypeError(`${key} must be an Array`);
            }
        } else if (typeof localConfig[key] !== typeof spec[key]) {
            console.error(`${key} must be of type ${typeof spec[key]}`);
            throw new TypeError(`${key} must be of type ${typeof spec[key]}`);
        }
    }

    // Specific business rule: targetHtmlId must be a non-empty string
    if (typeof localConfig.targetHtmlId === "string" && !localConfig.targetHtmlId.trim()) {
        console.error("targetHtmlId must be a non-empty string");
        throw new TypeError("targetHtmlId must be a non-empty string");
    }

    return true;
};

export { guardFunc };
export default guardFunc;
