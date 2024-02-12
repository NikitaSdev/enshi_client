import { Box, Button, styled } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  width: "1rem",
  height: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.gray.main,
}));
