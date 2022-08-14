import { roundToDecimal } from "../helpers/roundToDecimal";

test("round_should_return_0_case_of_undefined", () => {
  const result = roundToDecimal(undefined, 2);
  expect(result).toEqual(0);
});

test("round_should_return_0", () => {
  const result = roundToDecimal(0, 2);
  expect(result).toEqual(0);
});

test("round_should_return_two_decimals", () => {
  const result = roundToDecimal(5897.55448899, 2);
  expect(result).toEqual(5897.55);
});

test("round_should_return_100", () => {
  const result = roundToDecimal(99.999999, 2);
  expect(result).toEqual(100);
});

test("round_should_return_three_decimals", () => {
  const result = roundToDecimal(45.4589995, 3);
  expect(result).toEqual(45.459);
});
