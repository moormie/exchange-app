import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
} from "@mui/material";
import { FC } from "react";
import { CountryCurrency } from "../../types/CountryCurrency";

interface CurrencyTableProps {
  currencyList: CountryCurrency[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000033",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const CurrencyTable: FC<CurrencyTableProps> = ({ currencyList }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Flag</StyledTableCell>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>Currency</StyledTableCell>
            <StyledTableCell>Buy</StyledTableCell>
            <StyledTableCell>Sell</StyledTableCell>
            <StyledTableCell>Middle</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyList.map((currency) => (
            <TableRow
              key={currency.currencyCode}
              sx={{
                "&:last-child td, &:last-child th": {
                  border: 0,
                },
              }}
            >
              <TableCell component="th" scope="row">
                <img src={`/flags/${currency.countryCode.toLowerCase()}.png`} />
              </TableCell>
              <TableCell>{currency.countryName}</TableCell>
              <TableCell>{`${currency.currencyCode} (${currency.currencyName})`}</TableCell>
              <TableCell>{currency.exchangeRate.buy} EUR</TableCell>
              <TableCell>{currency.exchangeRate.sell} EUR</TableCell>
              <TableCell>{currency.exchangeRate.middle} EUR</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
