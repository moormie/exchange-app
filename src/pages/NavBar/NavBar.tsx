import { FC } from "react";

import { createSearchParams, useSearchParams } from "react-router-dom";
import { AppBar, Toolbar, styled } from "@mui/material";
import { SearchInput } from "../../components/SearchInput";
import { Header } from "../../components/Header";
import { URL_PARAM_SEARCH } from "../../constants/constants";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#000033",
  alignItems: "end",
}));

export const NavBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (value: string) => {
    const params = value ? { search: value } : undefined;
    setSearchParams(createSearchParams(params));
  };

  return (
    <>
      <Header title="George FE Test" color="dark" />
      <StyledAppBar position="sticky">
        <Toolbar variant="dense">
          <SearchInput
            onChange={onChange}
            value={searchParams.get(URL_PARAM_SEARCH)}
          />
        </Toolbar>
      </StyledAppBar>
    </>
  );
};
