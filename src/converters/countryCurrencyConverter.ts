import { Country } from "../types/Country";
import { CountryCurrency } from "../types/CountryCurrency";
import { Currency } from "../types/Currency";

export const countryCurrencyConverter = (
  countryList: Country[],
  currencyList: Currency[]
): CountryCurrency[] => {
  const resultList: CountryCurrency[] = [];

  currencyList.forEach((currency) => {
    const country = countryList.find(
      (country) => currency.currencyCode === country.currencyCode
    );
    if (country) {
      resultList.push({
        ...currency,
        exchangeRate: currency.exchangeRate,
        countryName: country.countryName,
        countryCode: country.countryCode,
      });
    }
  });

  return resultList.sort((a, b) => a.countryName.localeCompare(b.countryName));
};
