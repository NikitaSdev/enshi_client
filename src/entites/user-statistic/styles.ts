import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  width: "18.125rem",
  height: "27.875rem",
  marginTop: "2.5rem",
  borderRadius: "1rem",
  background: theme.palette.gray.contrastText,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

export const StyledStaticBox = styled(Box)(() => ({
  color: "#fff",
  width: "80%",
  height: "50%",
  display: "inline-flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
}));

export const HrLine = styled("hr")(() => ({
  width: "100%",
  color: "#333238",
}));

export const Title = styled(Box)(() => ({
  color: "#fff",
  fontSize: "23px",
  fontWeight: 600,
  fontStyle: "normal",
  letterSpacing: "0.92px",
  margin: "1rem 0 1rem 0",
}));

export const TextContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 10,
}));
