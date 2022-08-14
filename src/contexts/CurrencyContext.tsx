import { FC, createContext, useContext, useState, useEffect } from "react";
import { URL_GET_CURRENCIES } from "../constants/constants";
import { currencyListDataConverter } from "../converters/currencyDataListConverter";
import { Currency } from "../types/Currency";

interface CurrencyListContextProps {
  children: React.ReactNode;
}

interface ContextData {
  currencyList: Currency[];
  loading: boolean;
}

const CurrencyListContext = createContext<ContextData>({
  currencyList: [],
  loading: true,
});

export const CurrencyListProvider: FC<CurrencyListContextProps> = ({
  children,
}) => {
  const [state, setState] = useState<ContextData>({
    currencyList: [],
    loading: true,
  });

  useEffect(() => {
    fetch(URL_GET_CURRENCIES)
      .then((response) => response.json())
      .then((data) =>
        setState({
          currencyList: currencyListDataConverter(data),
          loading: false,
        })
      )
      .catch((error) => {
        console.log(error);
        setState({ currencyList: [], loading: false });
      });
  }, []);

  return (
    <CurrencyListContext.Provider value={state}>
      {children}
    </CurrencyListContext.Provider>
  );
};

export const useCurrencyListContext = () => {
  const store = useContext(CurrencyListContext);
  return store;
};
