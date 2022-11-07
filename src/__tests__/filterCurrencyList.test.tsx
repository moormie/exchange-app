import { filterCurrencyList } from "../helpers/filterCurrencyList";
import { countryCurrencyList } from "../__mocks__/mockCountryCurrencyList";

test("filter should return empty list in case of eur", () => {
  const searchValue = "eur";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(0);
});

test("filter should return multiple results with letter 'A'", () => {
  const searchValue = "A";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(5);
});

test("filter should return single result by currency code", () => {
  const searchValue = "ARS";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(1);
});

test("filter should return single result by currency name", () => {
  const searchValue = "Barbados Dollar";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(1);
});
