import { Currency } from "./Currency";

export interface CountryCurrency extends Currency {
  countryName: string;
  countryCode: string;
}
