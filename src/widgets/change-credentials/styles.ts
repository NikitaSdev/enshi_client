"use client";
import { styled, Box } from "@mui/material";

export const StyledTopContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 60,
  flexWrap: "wrap",
  marginTop: 80,
}));
