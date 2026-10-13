import registerGlobal from "./registerGlobal.js";
import getSpec from "./getSpec.js";
import buildSpec from "./buildSpec/index.js";
import renderToDom from "./renderToDom/index.js";

const render = (options = {}) => {
    const specJson = getSpec(options);

    const spec = buildSpec({
        inColumns: specJson.columns,
        inData: specJson.data,
        inType: specJson.type,
        inShowLog: specJson.showLog
    });

    return renderToDom({
        inSpec: spec,
        inTargetHtmlId: specJson.targetHtmlId,
        inAppendPosition: specJson.appendPosition,
        inShowLog: specJson.showLog
    });
};

registerGlobal({ render, getSpec, buildSpec, renderToDom });

export { render, getSpec, buildSpec, renderToDom };
export default render;
