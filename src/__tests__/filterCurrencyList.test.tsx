import { render } from "@testing-library/react";
import { filterCurrencyList } from "../helpers/filterCurrencyList";
import { countryCurrencyList } from "../__mocks__/mockCountryCurrencyList";
import { CurrencyTable } from "../components/CurrencyTable";

test("filter_should_return_empty_list", () => {
  const searchValue = "asd asd";
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

describe("ProductList component", () => {
  it("should display all product data when all columns are visible", () => {
    const { container, getByTestId } = render(
      <CurrencyTable currencyList={countryCurrencyList} />
    );

    for (const element of countryCurrencyList) {
      const testRow = getByTestId(element.currencyCode);

      expect(
        testRow.querySelector(`[data-testid="country-name"]`)
      ).toHaveTextContent(element.countryName);
      expect(
        testRow.querySelector(`[data-testid="exchange-buy"]`)
      ).toHaveTextContent("" + element.exchangeRate.buy);
      expect(
        testRow.querySelector(`[data-testid="exchange-middle"]`)
      ).toHaveTextContent("" + element.exchangeRate.middle);
      expect(
        testRow.querySelector(`[data-testid="exchange-sell"]`)
      ).toHaveTextContent("" + element.exchangeRate.sell);
    }
  });

  it("should display all product data when all columns are visible", () => {
    const { container, getByTestId } = render(
      <CurrencyTable currencyList={countryCurrencyList} />
    );

    for (const element of countryCurrencyList) {
      const testRow = getByTestId(element.currencyCode);

      expect(
        testRow.querySelector(`[data-testid="country-name"]`)
      ).toHaveTextContent(element.countryName);
      expect(
        testRow.querySelector(`[data-testid="exchange-buy"]`)
      ).toHaveTextContent("" + element.exchangeRate.buy);
      expect(
        testRow.querySelector(`[data-testid="exchange-middle"]`)
      ).toHaveTextContent("" + element.exchangeRate.middle);
      expect(
        testRow.querySelector(`[data-testid="exchange-sell"]`)
      ).toHaveTextContent("" + element.exchangeRate.sell);
    }
  });
});
