import { currencyListDataConverter } from "../converters/currencyDataListConverter";
import { currencyList } from "../__mocks__/mockCurrencyDataList";

test("should_converted_data_list_not_be_empty", () => {
  const convertedList = currencyListDataConverter(currencyList);
  expect(convertedList.length).toBeGreaterThan(0);
});

test("shoud_have_properties", () => {
  const convertedList = currencyListDataConverter(currencyList);
  convertedList.forEach((e) => {
    expect(e).toHaveProperty("currencyCode");
    expect(e).toHaveProperty("currencyName");
    expect(e).toHaveProperty("exchangeRate");
    expect(e).toHaveProperty("exchangeRate.middle");
    expect(e).toHaveProperty("exchangeRate.sell");
    expect(e).toHaveProperty("exchangeRate.buy");
  });
});

test("shoud_not_have_properties", () => {
  const convertedList = currencyListDataConverter(currencyList);
  convertedList.forEach((e) => {
    expect(e).not.toHaveProperty("banknoteRate");
    expect(e).not.toHaveProperty("flags");
    expect(e).not.toHaveProperty("precision");
  });
});
