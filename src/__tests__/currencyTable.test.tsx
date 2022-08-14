import { render } from "@testing-library/react";
import { countryCurrencyList } from "../__mocks__/mockCountryCurrencyList";
import { CurrencyTable } from "../components/CurrencyTable";

describe("Currency Table component", () => {
  it("should display all currency data when all columns are visible", () => {
    const { getByTestId } = render(
      <CurrencyTable currencyList={countryCurrencyList} />
    );

    for (const element of countryCurrencyList) {
      const testRow = getByTestId(element.currencyCode);

      const testImage = testRow.querySelector("img") as HTMLImageElement;

      expect(testImage).not.toBeNull;
      expect(testImage.src).not.toBeNull;
      expect(testImage.alt).toContain(element.countryCode);
      expect(
        testRow.querySelector(`[data-testid="country-name"]`)
      ).toHaveTextContent(element.countryName);
      expect(
        testRow.querySelector(`[data-testid="currency-code-name"]`)
      ).toHaveTextContent(`${element.currencyCode} (${element.currencyName})`);
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
