import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  InputAdornment,
  TextField,
  styled,
  alpha,
} from "@mui/material";
import { Currency } from "../../types/Currency";

interface SearchInputProps {
  options: Currency[];
  onChange: (value: string | Currency | null) => void;
  loading: boolean;
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
    padding: "4px 8px",
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
});

export const SearchInput: FC<SearchInputProps> = ({
  options,
  onChange,
  loading,
}) => {
  return (
    <StyledAutoComplete
      options={options}
      getOptionLabel={(option: any) =>
        `${option.currencyCode} (${option.currencyName})`
      }
      onInputChange={(event, newInputValue) => {
        onChange(newInputValue);
      }}
      onChange={(event, newValue) => onChange(newValue as Currency)}
      loading={loading}
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
