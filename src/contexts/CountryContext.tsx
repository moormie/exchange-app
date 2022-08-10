import React, {
  createContext,
  FC,
  useContext,
  useState,
  useEffect,
} from "react";
import { countriesDataConverter } from "../converters/CountriesDataConverter";
import { currencyListDataConverter } from "../converters/CurrencyDataListConverter";
import { Country } from "../types/Country";

const URL =
  "https://gist.githubusercontent.com/tiagodealmeida/0b97ccf117252d742dddf098bc6cc58a/raw/f621703926fc13be4f618fb4a058d0454177cceb/countries.json";

interface CountryListContextProps {
  children: React.ReactNode;
}

interface ContextData {
  countryList: Country[];
  loading: boolean;
}

const CountryListContext = createContext<ContextData>({
  countryList: [],
  loading: true,
});

export const CountryListProvider: FC<CountryListContextProps> = ({
  children,
}) => {
  const [state, setState] = useState<ContextData>({
    countryList: [],
    loading: true,
  });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setState({
          countryList: countriesDataConverter(data),
          loading: false,
        })
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <CountryListContext.Provider value={state}>
      {children}
    </CountryListContext.Provider>
  );
};

export const useCountryListContext = () => {
  const store = useContext(CountryListContext);
  return store;
};
