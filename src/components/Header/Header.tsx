import { FC } from "react";
import Typography from "@mui/material/Typography";

interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Typography variant="h5" fontWeight="bold" padding={2}>
      {title}
    </Typography>
  );
};
