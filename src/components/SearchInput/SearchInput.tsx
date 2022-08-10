import { FC } from "react";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";

interface SearchInputProps {
  options: string[];
}

const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  minWidth: 300,
}));

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    padding: 4,
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
});

export const SearchInput: FC<SearchInputProps> = ({ options }) => {
  return (
    <StyledAutoComplete
      options={options}
      renderInput={(params) => (
        <StyledTextField
          {...params}
          placeholder="Search..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="inherit" />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
