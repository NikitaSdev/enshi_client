"use client";
import { useUserHistoryMode } from "@/shared/context/history-mode";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import {
  DividerBar,
  StyledDividerContainer,
  StyledSwitchButton,
} from "./styles";

export const TypeSwitcher = () => {
  const { toggleMode } = useUserHistoryMode();
  const isMobile = useMediaQuery("(max-width: 380px)");
  const [selected, setSelected] = useState<"favourite" | "viewed">("viewed");
  const handleSelect = (type: "favourite" | "viewed") => {
    setSelected(type);
  };

  return (
    <Box sx={{ width: "auto", pl: 3, pt: 3, pr: 3 }}>
      <Box sx={{ display: "flex", gap: 3 }}>
        <StyledSwitchButton
          active={selected === "viewed"}
          onClick={() => {
            toggleMode("viewed");
            handleSelect("viewed");
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: isMobile ? 14 : 18 }}>
            Просмотрено
          </Typography>
        </StyledSwitchButton>
        <StyledSwitchButton
          active={selected === "favourite"}
          onClick={() => {
            toggleMode("favourite");
            handleSelect("favourite");
          }}
        >
          <Typography variant="subtitle1" sx={{ fontSize: isMobile ? 14 : 18 }}>
            Избранное
          </Typography>
        </StyledSwitchButton>
      </Box>
      <StyledDividerContainer>
        <DividerBar active={selected === "viewed"} />
        <DividerBar active={selected === "favourite"} />
      </StyledDividerContainer>
    </Box>
  );
};
