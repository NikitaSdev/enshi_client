import { Box, Button, styled } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "row",
  color: "#fff",
  margin: "3rem 0rem 3rem 0rem",
}));

export const StyledTextContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  color: "#fff",
  margin: "0rem 0rem 3rem 0rem",
}));

export const TextContainers = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  width: "30rem",
  margin: "0rem 0rem 1rem 1.7rem",
}));

export const TextCard = styled(Box)(() => ({
  display: "flex",
  width: "auto",
}));
