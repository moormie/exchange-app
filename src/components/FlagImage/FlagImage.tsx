import { FC, useState } from "react";
import { FLAG_IMG_PATH } from "../../constants/constants";

interface FlagImageProps {
  currencyCode: string;
}

export const FlagImage: FC<FlagImageProps> = ({ currencyCode }) => {
  const [error, setError] = useState(false);
  const [fallbackImgSrc, setFallbackImgSrc] = useState("");

  const onError = () => {
    setError(true);
    setFallbackImgSrc(`${FLAG_IMG_PATH}no_flag.svg`);
  };

  return (
    <img
      src={
        error
          ? fallbackImgSrc
          : `${FLAG_IMG_PATH}${currencyCode.toLowerCase()}.png`
      }
      onError={onError}
      alt={currencyCode}
      style={{
        boxShadow: "rgba(149, 157, 165, 0.5) 0px 8px 24px",
        borderRadius: 8,
        width: 70,
      }}
    />
  );
};
