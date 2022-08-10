import { ExchangeRate } from "./ExchangeRate";

export interface CurrencyListData {
  baseCurrency: string;
  fx: FX[];
}

interface FX {
  currency: string;
  exchangeRate: ExchangeRate;
  nameI18N: string;
}
