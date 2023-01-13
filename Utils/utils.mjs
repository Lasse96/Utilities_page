export function round(n, precision = 2) {
  const exponent = Math.pow(10, precision);
  return Math.round(n * exponent) / exponent;
}
