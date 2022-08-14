import { filterCurrencyList } from "../helpers/filterCurrencyList";
import { countryCurrencyList } from "../__mocks__/mockCountryCurrencyList";

test("filter_should_return_empty_list", () => {
  const searchValue = "eur";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(0);
});

test("filter_should_return_multiple_results", () => {
  const searchValue = "A";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(5);
});

test("filter_should_return_single_result_by_currency_code", () => {
  const searchValue = "ARS";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(1);
});

test("filter_should_return_single_result_by_currency_name", () => {
  const searchValue = "Barbados Dollar";
  const filteredList = filterCurrencyList(countryCurrencyList, searchValue);
  expect(filteredList.length).toEqual(1);
});
