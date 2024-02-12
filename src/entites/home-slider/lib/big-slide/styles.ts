import { Box, styled } from "@mui/material";

export const BigSlideContainer = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  height: "100%",
  minHeight: 650,
  zIndex: 10,
  "@media (max-width: 1440px)": {
    minHeight: 550,
  },
  "@media (max-width: 744px)": {
    minHeight: 500,
  },
}));

export const StyledFade = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  background: "rgba(0,0,0, 0.55)",
  opacity: 1,
  zIndex: 4,
  width: "100%",
  height: "100%",
}));

export const StyledBodyContainer = styled(Box)(() => ({
  zIndex: 6,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}));
