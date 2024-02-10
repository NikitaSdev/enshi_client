import { Box, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  width: "8.75rem",
  height: "2.75rem",
  borderRadius: "0.3rem",
  background: "#8C53FD",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledTypography = styled(Typography)(() => ({
  color: "#fff",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "0.64px",
  fontStyle: "normal",
}));
