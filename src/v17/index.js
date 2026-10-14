import registerGlobal from "./registerGlobal.js";
import validateConfig from "./validateConfig.js";
import getSpec from "./getSpec.js";
import buildSpec from "./buildSpec/index.js";
import renderToDom from "./renderToDom/index.js";

// Main orchestrator: coordinates validation, spec building, and DOM rendering
const render = (options = {}) => {
    const config = validateConfig(options);
    // console.log("showLog : ", config?.showLog);

    const spec = buildSpec({
        inColumns: config.columns,
        inData: config.data,
        inType: config.type,
        inShowLog: config.showLog
    });

    return renderToDom({
        inSpec: spec,
        inTargetHtmlId: config.targetHtmlId,
        inAppendPosition: config.appendPosition,
        inShowLog: config.showLog
    });
};

registerGlobal({ render, getSpec, validateConfig, buildSpec, renderToDom });

export { render, getSpec, validateConfig, buildSpec, renderToDom };
export default render;
