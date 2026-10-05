import skeletonToSpec from "../../../skeletonToSpec/v1/index.js";

import skeletonJson from './skeleton.json' with {type: 'json'};
import fragmentsJson from './fragments.json' with {type: 'json'};

// Story 2: Build table structure specification from skeleton and fragments
const startFunc = ({
    inSkeletonType = "default",
    inSkeletonJson = skeletonJson,
    inFragmentsJson = fragmentsJson,
    inShowLog = false
} = {}) => {
    const localSkeletonType = inSkeletonType;
    const localSkeletonJson = inSkeletonJson;
    const localFragmentsJson = inFragmentsJson;
    const localShowLog = inShowLog;

    const rawSkeleton = localSkeletonJson[localSkeletonType] ?? localSkeletonJson.default ?? localSkeletonJson;
    const targetSkeleton = structuredClone(rawSkeleton);

    if (localShowLog) console.log("targetSkeleton : ", targetSkeleton);

    const structureJson = skeletonToSpec({
        inSkeleton: targetSkeleton,
        inFragments: localFragmentsJson
    });

    if (localShowLog) console.log("structureJson : ", structureJson);

    return structureJson;
};

export default startFunc;
