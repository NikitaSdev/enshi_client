"use client";

import { Box, Button, styled } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  margin: "30px  0",
  background: theme.palette.gray.contrastText,
  borderRadius: 10,
  padding: "40px 0",
}));

export const WallpaperContainer = styled(Box)(() => ({
  height: 200,
  margin: "0 40px",
  position: "relative",
  zIndex: 3,
}));

export const StyledWallpaperChangeButton = styled(Button)(() => ({
  position: "absolute",
  height: 40,
  width: 120,
  top: 20,
  right: 20,
}));

export const StyledAvatarChangeButton = styled(Button)(() => ({
  height: 40,
  width: 120,
}));

export const StyledAvatarContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-end",
  gap: 20,
  marginLeft: 80,
  marginTop: -30,
  zIndex: 10,
}));
