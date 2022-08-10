import { Country } from "./Country";

export interface CountriesData {
  countries: Countries;
}

interface Countries {
  country: Country[];
}
