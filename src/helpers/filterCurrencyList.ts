import { CountryCurrency } from "../types/CountryCurrency";

export const filterCurrencyList = (
  countryCurrencyList: CountryCurrency[],
  searchedValue: string
): CountryCurrency[] => {
  if (!searchedValue) {
    return countryCurrencyList;
  } else {
    return [
      ...countryCurrencyList.filter(
        (c) =>
          c.currencyName.toLowerCase().includes(searchedValue.toLowerCase()) ||
          c.currencyCode.toLowerCase().includes(searchedValue.toLowerCase())
      ),
    ];
  }
};
