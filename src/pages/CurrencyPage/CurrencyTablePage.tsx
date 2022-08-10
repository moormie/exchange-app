import { FC, useEffect, useState } from "react";
import { CurrencyTable } from "../../components/CurrencyTable";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { useCountryListContext } from "../../contexts/CountryContext";
import { useCurrencyListContext } from "../../contexts/CurrencyContext";
import { CountryCurrency } from "../../types/CountryCurrency";

export const CurrencyTablePage: FC = () => {
  const { currencyList, loading: currencyLoading } = useCurrencyListContext();
  const { countryList, loading: countryLoading } = useCountryListContext();

  const [countryCurrencyList, setCountryCurrencyList] = useState<
    CountryCurrency[]
  >([]);

  useEffect(() => {
    const resultList: CountryCurrency[] = currencyList.map((currency) => {
      const country = countryList.find(
        (country) => currency.currencyCode === country.currencyCode
      );
      return {
        ...currency,
        exchangeRate: currency.exchangeRate,
        countryName: country?.countryName ?? "",
        countryCode: country?.countryCode ?? "",
      };
    });
    setCountryCurrencyList(
      resultList.sort((a, b) => a.countryName.localeCompare(b.countryName))
    );
  }, [countryList, currencyList]);

  return currencyLoading || countryLoading ? (
    <LoadingIndicator open />
  ) : (
    <div style={{ padding: 64 }}>
      Euro Exchange Rate
      <CurrencyTable currencyList={countryCurrencyList} />
    </div>
  );
};
