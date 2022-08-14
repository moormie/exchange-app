import { FC } from "react";
import { Typography, Box } from "@mui/material";

interface HeaderProps {
  title: string;
  color?: "light" | "dark";
}

export const Header: FC<HeaderProps> = ({ title, color = "light" }) => {
  const darkColor = "#000033";
  const lightColor = "#FFFFFF";
  return (
    <Box bgcolor={color === "dark" ? darkColor : lightColor}>
      <Typography
        variant="h5"
        fontWeight="bold"
        padding={2}
        color={color === "light" ? darkColor : lightColor}
      >
        {title}
      </Typography>
    </Box>
  );
};
