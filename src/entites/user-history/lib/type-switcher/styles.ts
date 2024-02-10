import { Box, styled } from "@mui/material";

export const AnimeContainer = styled(Box)(() => ({
  display: "flex",
  // justifyContent: "space-around",
  position: "relative",
}));

export const StyledSwitchButton = styled("button")<{ active?: boolean }>(
  ({ active }) => ({
    background: "transparent",
    border: "none",
    cursor: "pointer",
    "> h6": {
      color: !active ? "#828282" : undefined,
      transition: "0.3s",
      fontWeight: 600,
      fontSize: 18,
    },
  })
);

export const StyledDividerContainer = styled(Box)(() => ({
  width: "100%",
  background: "#333238",
  height: 4,
  borderRadius: 1,
  marginTop: 8,
  display: "flex",
}));

export const DividerBar = styled(Box)<{ active: boolean }>(({ active }) => ({
  height: "100%",
  width: 155,
  background: active ? "#828282" : "transparent",
  transition: "0.3s",
}));
