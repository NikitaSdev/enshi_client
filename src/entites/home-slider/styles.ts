"use client";

import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  minHeight: 650,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 1440px)": {
    minHeight: 550,
  },
  "@media (max-width: 744px)": {
    minHeight: 500,
  },
}));

export const SmallSliderContainer = styled(Box)(() => ({
  position: "absolute",
  bottom: -150,
  right: 170,
  width: 650,
  height: 360,
  zIndex: 10,
  "@media(max-width:1100px)": {
    right: -40,
  },
  "@media(max-width:900px)": {
    right: -240,
  },
  "@media(max-width:650px)": {
    right: -450,
  },
  "@media(max-width:420px)": {
    right: -500,
    bottom: -250,
  },
}));
