export const roundToDecimal = (num: number | undefined, decimal: number) => {
  if (num === 0 || !num) {
    return 0;
  }
  const decimalPoint = Math.pow(10, decimal);
  return Math.round((num + Number.EPSILON) * decimalPoint) / decimalPoint;
};
