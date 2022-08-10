import { CountriesData } from "../types/CountriesData";
import { Country } from "../types/Country";

export const countriesDataConverter = (
  countriesData: CountriesData
): Country[] => {
  const { countries } = countriesData;
  const { country: countryList = [] } = countries;

  const convertedList: Country[] = countryList.map((c) => ({
    countryCode: c.countryCode,
    countryName: c.countryName,
    currencyCode: c.currencyCode,
  }));

  return convertedList;
};
