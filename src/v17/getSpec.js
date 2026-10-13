import spec from "./spec.json" with { type: "json" };

// Returns the specification object when called
const getSpec = () => {
    return { ...spec };
};

// Also attach properties directly to getSpec so it functions as both an object and a callable function
Object.assign(getSpec, spec);

export { getSpec, spec };
export default getSpec;
