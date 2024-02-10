"use client";

import { Button, styled } from "@mui/material";

export const StyledFilterButton = styled(Button)<{ active?: boolean }>(
  ({ theme, active }) => ({
    background: active ? theme.palette.purple.main : "#1F1F25",
    height: 50,
  })
);
