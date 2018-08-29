let classCache = {};

/**
 * Checks if two DNA values are equals
 * 
 * @param {Object} yourDna 
 * @param {Object} otherDna 
 * @param {boolean} defaultValue
 * @returns {boolean}
 */
export default function areValuesEquals (yourDna, otherDna, defaultValue = false) {
    const classCacheKey = createCacheKey(yourDna, otherDna);
    let areEquals = defaultValue;
    if (classCache[classCacheKey]) {
        areEquals = classCache[classCacheKey];
    } else {
        areEquals = yourDna.value === otherDna.value;
        classCache[classCacheKey] = areEquals;
    }
    return areEquals;
}

/**
 * Serialize the DNA to a cache key
 * 
 * @param {Object} yourDna 
 * @param {Object} otherDna 
 * @returns {String}
 */
function createCacheKey(yourDna, otherDna) {
    return yourDna.region + '-' + otherDna.region;
}