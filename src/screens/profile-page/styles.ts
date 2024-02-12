import { Box, styled } from "@mui/material";

export const UserProfileContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  marginBottom: 80,
  marginTop: -60,
}));

export const UserProfileDataContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const UserHistoryContainer = styled(Box)(({ theme }) => ({
  margin: "6rem 1rem 4rem 3rem",
  width: "100%",
  height: "auto",
  background: theme.palette.gray.contrastText,
  borderRadius: "1rem",
}));
