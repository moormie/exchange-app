import { FC } from "react";

import { createSearchParams, useSearchParams } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";
import { useCurrencyListContext } from "../../contexts/CurrencyContext";
import { SearchInput } from "../../components/SearchInput";
import { Currency } from "../../types/Currency";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#000033",
  alignItems: "end",
}));

export const NavBar: FC = () => {
  const { currencyList, loading: currencyLoading } = useCurrencyListContext();

  // eslint-disable-next-line
  const [_, setSearchParams] = useSearchParams();

  const onChange = (value: string | Currency | null) => {
    if (value) {
      const currencyCode =
        typeof value === "string" ? value : value.currencyCode;
      setSearchParams(createSearchParams({ search: currencyCode }));
    } else {
      setSearchParams(createSearchParams(undefined));
    }
  };

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <SearchInput
          options={currencyList}
          onChange={onChange}
          loading={currencyLoading}
        />
      </Toolbar>
    </StyledAppBar>
  );
};
