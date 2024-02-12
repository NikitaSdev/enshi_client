import { Box, Button, styled } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  color: "#fff",
  gap: 30,
  margin: "3rem 0rem 3rem 0rem",
  "@media(max-width: 800px)": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
}));

export const StyledTextContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  color: "#fff",
}));

export const TextContainers = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 40,
  width: "100%",
  marginTop: 30,
  "@media(max-width: 420px)": {
    gap: 20,
  },
}));

export const TextCard = styled(Box)(() => ({
  display: "flex",
  width: "auto",
}));
