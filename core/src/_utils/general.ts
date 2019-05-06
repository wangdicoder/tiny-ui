/**
 * Check whether the target is in the array
 * @param target
 * @param array
 */
export const isOneOf = (target: string, array: string | string[]) => {
    if (Array.isArray(array)) {
        return array.includes(target);
    }

    return array === target;
};

/**
 * Transfer camel char to dash format
 * @param str
 */
export const camelCaseToDash = (str: string) => {
    const regex = /[A-Z]/g;
    return str.replace(regex, (word: string) => {
        return '-' + word.toLowerCase();
    });
};
