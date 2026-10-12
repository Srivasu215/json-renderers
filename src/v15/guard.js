const gaurdFunc = ({ intype, indata }) => {

    if (typeof intype !== "string" || intype.trim() === "") {
        console.error("type must be a string");
        throw new Error("type must be a string");
    }

    if (!Array.isArray(indata)) {
        console.error("data must be an Array");
        throw new Error("data must be an Array");
    }

    return true;
};

export default gaurdFunc;