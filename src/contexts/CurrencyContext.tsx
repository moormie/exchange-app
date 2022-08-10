import React, {
  createContext,
  FC,
  useContext,
  useState,
  useEffect,
} from "react";
import { currencyListDataConverter } from "../converters/CurrencyDataListConverter";
import { Currency } from "../types/Currency";

const URL = "https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343";

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
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setState({
          currencyList: currencyListDataConverter(data),
          loading: false,
        })
      )
      .catch((error) => console.log(error));
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
