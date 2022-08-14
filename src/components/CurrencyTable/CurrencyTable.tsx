import { FC } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
} from "@mui/material";
import { CountryCurrency } from "../../types/CountryCurrency";
import { roundToDecimal } from "../../helpers/roundToDecimal";
import { FlagImage } from "../FlagImage";
interface CurrencyTableProps {
  currencyList: CountryCurrency[];
}

const StyledTableContainer = styled(TableContainer)(() => ({
  borderRadius: 18,
  boxShadow: "#00003340 0px 10px 50px",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#000033",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  height: 85,
}));

export const CurrencyTable: FC<CurrencyTableProps> = ({ currencyList }) => {
  return (
    <StyledTableContainer>
      <Table>
        {currencyList.length === 0 && <caption>No currency found</caption>}
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
            <StyledTableRow
              key={currency.currencyCode}
              data-testid={currency.currencyCode}
            >
              <TableCell component="th" scope="row" data-testid="country-flag">
                <FlagImage currencyCode={currency.countryCode} />
              </TableCell>
              <TableCell data-testid="country-name">
                {currency.countryName}
              </TableCell>
              <TableCell data-testid="currency-code-name">{`${currency.currencyCode} (${currency.currencyName})`}</TableCell>
              <TableCell data-testid="exchange-buy">
                {roundToDecimal(currency.exchangeRate.buy, 2)}
              </TableCell>
              <TableCell data-testid="exchange-sell">
                {roundToDecimal(currency.exchangeRate.sell, 2)}
              </TableCell>
              <TableCell data-testid="exchange-middle">
                {roundToDecimal(currency.exchangeRate.middle, 2)}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};
