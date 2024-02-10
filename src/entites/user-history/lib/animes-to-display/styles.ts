"use client";

import { Box, styled } from "@mui/material";

export const StyledAnimeList = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 20,
  width: "100%",
  height: 770,
  padding: "1rem",
  overflowY: "scroll",
  paddingTop: 30,
}));
