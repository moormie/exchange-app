import { ExchangeRate } from "./ExchangeRate";

export interface Currency {
  currencyCode: string;
  currencyName: string;
  exchangeRate: ExchangeRate;
}
