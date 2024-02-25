import { Box, Grid, styled, Typography } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  width: "18.125rem",
  height: "25rem",
  background: theme.palette.gray.contrastText,
  borderRadius: "1rem",
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const MobileStyledContainer = styled(Box)(() => ({
  width: "100%",
  padding: 40,
  background: "#1F1F25",
  borderRadius: "1rem",
  display: "flex",
  position: "relative",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  marginTop: -100,
  "@media(max-width:480px)": {
    flexDirection: "column",
  },
}));
export const UserLogin = styled(Typography)(() => ({
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
  marginTop: "1.5rem",
}));
