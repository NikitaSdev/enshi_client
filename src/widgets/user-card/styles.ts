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
  "@media(max-width:1000px)": {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    height: 210,
    padding: "0 40px",
    marginTop: 20,
  },
  "@media(max-width:563px)": {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    height: "auto",
    padding: "40px",
    marginTop: 20,
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
