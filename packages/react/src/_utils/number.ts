/**
 *
 * @param value
 * @param precision
 */
export const roundToPrecision = (value: number, precision: number): string => {
  return parseFloat(value + '').toFixed(precision);
};
