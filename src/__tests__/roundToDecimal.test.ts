import { roundToDecimal } from "../helpers/roundToDecimal";

test("round should return 0 case of undefined", () => {
  const result = roundToDecimal(undefined, 2);
  expect(result).toEqual(0);
});

test("round should return 0", () => {
  const result = roundToDecimal(0, 2);
  expect(result).toEqual(0);
});

test("round should return two decimals", () => {
  const result = roundToDecimal(5897.55448899, 2);
  expect(result).toEqual(5897.55);
});

test("round should return 100", () => {
  const result = roundToDecimal(99.999999, 2);
  expect(result).toEqual(100);
});

test("round should return three decimals", () => {
  const result = roundToDecimal(45.4589995, 3);
  expect(result).toEqual(45.459);
});
