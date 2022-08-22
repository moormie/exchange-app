import { Currency } from "../types/Currency";
import { CurrencyListData } from "../types/CurrencyDataList";

export const currencyListDataConverter = (
  currencyListData: CurrencyListData
): Currency[] => {
  const { fx = [] } = currencyListData;

  const convertedList: Currency[] = fx
    .filter((e) => e.exchangeRate && e.nameI18N && e.currency !== "EUR")
    .map((e) => ({
      exchangeRate: {
        buy: e.exchangeRate.buy,
        middle: e.exchangeRate.middle,
        sell: e.exchangeRate.sell,
      },
      currencyCode: e.currency,
      currencyName: e.nameI18N,
    }));

  return convertedList.sort((a, b) =>
    a.currencyCode.localeCompare(b.currencyCode)
  );
};
