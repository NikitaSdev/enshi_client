"use client";

import { Box, styled } from "@mui/material";
import { Swiper } from "swiper/react";

export const SwiperContainer = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: 10,
}));

export const StyledSwiperControlButton = styled("button")<{
  left: boolean;
  centered?: boolean;
}>(({ left, centered }) => ({
  background: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  left: left ? -50 : undefined,
  right: !left ? -50 : undefined,
  marginBottom: centered ? 80 : undefined,
}));

export const StyledSwiper: any = styled(Swiper)<{ sm?: string }>(({ sm }) => ({
  width: "100%",
  minWidth: sm ? 800 : 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 20,
}));
