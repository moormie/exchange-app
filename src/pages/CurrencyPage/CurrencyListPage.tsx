import { styled } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CurrencyTable } from "../../components/CurrencyTable";
import { Header } from "../../components/Header";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { URL_PARAM_SEARCH } from "../../constants/constants";
import { useCountryListContext } from "../../contexts/CountryContext";
import { useCurrencyListContext } from "../../contexts/CurrencyContext";
import { countryCurrencyConverter } from "../../converters/countryCurrencyConverter";
import { filterCurrencyList } from "../../helpers/filterCurrencyList";
import { CountryCurrency } from "../../types/CountryCurrency";

const StyledContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(8),
  height: `calc(100% - 64px)`,
}));

export const CurrencyTablePage: FC = () => {
  const { currencyList, loading: currencyLoading } = useCurrencyListContext();
  const { countryList, loading: countryLoading } = useCountryListContext();

  const [searchParams] = useSearchParams();

  const [countryCurrencyList, setCountryCurrencyList] = useState<
    CountryCurrency[]
  >([]);

  useEffect(() => {
    const countryCurrencyList = countryCurrencyConverter(
      countryList,
      currencyList
    );
    const params = searchParams.get(URL_PARAM_SEARCH) ?? "";
    const filteredList = filterCurrencyList(countryCurrencyList, params);
    setCountryCurrencyList(filteredList);
  }, [countryList, currencyList, searchParams]);

  return currencyLoading || countryLoading ? (
    <LoadingIndicator open />
  ) : (
    <StyledContainer>
      <Header title="Euro Exchange Rate" />
      <CurrencyTable currencyList={countryCurrencyList} />
    </StyledContainer>
  );
};
