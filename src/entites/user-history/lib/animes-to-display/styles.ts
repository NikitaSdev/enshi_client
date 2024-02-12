"use client";

import { Box, styled } from "@mui/material";

export const StyledAnimeList = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  width: "100%",
  height: 770,
  padding: "1rem",
  overflowY: "scroll",
  paddingTop: 30,
  "@media(max-width: 420px)": { justifyContent: "center" },
}));
