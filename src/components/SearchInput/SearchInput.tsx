import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  InputAdornment,
  styled,
  alpha,
  InputBase,
  FormControl,
} from "@mui/material";
interface SearchInputProps {
  onChange: (value: string) => void;
  value: string | null;
}
const StyledSearchInput = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  minWidth: 250,
  padding: theme.spacing(0, 1),
  "& .MuiInputBase-input": {
    "&:focus": {
      border: "none",
    },
    fontSize: 14,
    padding: 6,
  },
}));

export const SearchInput: FC<SearchInputProps> = ({ onChange, value }) => {
  return (
    <FormControl variant="standard">
      <StyledSearchInput
        value={value ?? ""}
        placeholder="Search Currency"
        onChange={(event) => {
          onChange(event.target.value);
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
