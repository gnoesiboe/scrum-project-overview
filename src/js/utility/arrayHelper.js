/**
 * @param {Array} first
 * @param {Array} second
 *
 * @returns {Array}
 */
export function intersect(first, second) {
    return first.filter((value) => {
        return second.indexOf(value) !== -1;
    });
}

/**
 * @param {Array} theArray
 *
 * @returns {Array}
 */
export function clone(theArray) {
    return theArray.slice();
}
