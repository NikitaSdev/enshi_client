import { FC } from "react";
import { ISwitchType } from "./types";
import { Box, Button } from "@mui/material";

export const AnimeTypeSwitcher: FC<ISwitchType> = ({ type, setType }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3, mr: 5 }}>
      <Button
        disabled={type === "high-rated"}
        onClick={() => setType("high-rated")}
      >
        Популярное
      </Button>
      <Button disabled={type === "new"} onClick={() => setType("new")}>
        Новинки
      </Button>
    </Box>
  );
};
