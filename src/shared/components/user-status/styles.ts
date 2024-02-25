import { Box, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  width: "8.75rem",
  height: "2.2rem",
  borderRadius: "0.3rem",
  background: "#8C53FD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 1,
}));

export const StyledTypography = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "17px",
  fontWeight: 300,
  lineHeight: "normal",
  letterSpacing: "0.64px",
  fontStyle: "normal",
}));
