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

/**
 * Covert hex color to rgb color including alpha channel
 * @param color: hex color
 * @param opacity: max 1
 */
export const convertHexToRGBA = (color: string, opacity: number = 1): string => {
    if (/^#[0-9A-F]{6}$/i.test(color)) {
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return `rgba(${r},${g},${b},${opacity})`;
    }
    return color;
};
