import { FC } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

import { styled } from "@mui/material/styles";

const Loading = styled(Backdrop)(() => ({
  zIndex: 5000,
  color: "#fff",
}));

export interface LoadingIndicatorProps {
  open?: boolean;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  open = false,
}) => {
  return (
    <Loading open={open}>
      <CircularProgress color="inherit" />
    </Loading>
  );
};
