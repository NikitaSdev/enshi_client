import { FC } from "react";
import { FilterButtonProps } from "./types";
import { Button } from "@mui/material";

export const FilterButton: FC<FilterButtonProps> = ({
  label,
  onClick,
  type,
}) => {
  return (
    <Button
      onClick={(e) => onClick(e, type)}
      sx={{ padding: "auto 40px", minWidth: 100 }}
    >
      {label}
    </Button>
  );
};
