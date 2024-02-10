"use client";

import { Box, styled, Button } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.gray.contrastText,
  borderRadius: 10,
  padding: 30,
  flex: 2,
  height: 440,
  display: "flex",
  flexDirection: "column",
}));

export const StyledButton = styled(Button)(() => ({
  alignSelf: "flex-end",
  height: 40,
  width: 138,
  marginTop: 30,
}));
