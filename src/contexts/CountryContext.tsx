import { FC, createContext, useContext, useState, useEffect } from "react";
import { URL_GET_COUNTRIES } from "../constants/constants";
import { countriesDataConverter } from "../converters/countriesDataConverter";
import { Country } from "../types/Country";

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
    fetch(URL_GET_COUNTRIES)
      .then((response) => response.json())
      .then((data) =>
        setState({
          countryList: countriesDataConverter(data),
          loading: false,
        })
      )
      .catch((error) => {
        console.log(error);
        setState({ countryList: [], loading: false });
      });
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
