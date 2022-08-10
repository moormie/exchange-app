import { FC } from "react";

import {
  AppBar,
  Autocomplete,
  InputAdornment,
  TextField,
  Toolbar,
  styled,
  appBarClasses,
} from "@mui/material";
import { useCurrencyListContext } from "../../contexts/CurrencyContext";

import SearchIcon from "@mui/icons-material/Search";
import { SearchInput } from "../../components/SearchInput";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#000033",
  alignItems: "end",
}));

export const NavBar: FC = () => {
  const { currencyList, loading: currencyLoading } = useCurrencyListContext();

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <SearchInput options={currencyList.map((c) => c.currencyCode)} />
      </Toolbar>
    </StyledAppBar>
  );
};
