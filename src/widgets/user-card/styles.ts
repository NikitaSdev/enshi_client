import { Box, Grid, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  width: "18.125rem",
  height: "28.0625rem",
  background: "#1F1F25",
  borderRadius: "1rem",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const MobileStyledContainer = styled(Box)(() => ({
  width: "100%",
  height: "13.125rem",
  background: "#1F1F25",
  borderRadius: "1rem",
  display: "flex",
  position: "relative",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
}));
export const UserLogin = styled(Typography)(() => ({
  color: "#fff",
  margin: "1rem",
  fontSize: "23px",
  fontWeight: 600,
  letterSpacing: "0.93px",
  fontStyle: "normal",
  lineHeight: "normal",
}));

export const StyledGrid = styled(Grid)(() => ({
  display: "inline-flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "8.75rem",
  height: "3.125rem",
  margin: "1rem",
}));
