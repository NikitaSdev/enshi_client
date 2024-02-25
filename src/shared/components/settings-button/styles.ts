import { Box, styled, Button } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  width: "0.2rem",
  height: "1.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.gray.main,
}));
