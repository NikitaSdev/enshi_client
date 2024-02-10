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
  "@media (max-width: 480px)": {
    minHeight: 450,
  },
}));

export const SmallSliderContainer = styled(Box)(() => ({
  position: "absolute",
  bottom: -150,
  right: 5,
  width: 650,
  height: 360,
  zIndex: 10,
}));
