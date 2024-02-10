import { styled } from "@mui/material";

export const AnimeCard = styled("div")<{ width?: number; height?: number }>(
  ({ width, height }) => ({
    display: "inline-flex",
    position: "relative",
    width: "100%",
    maxWidth: width ? width : "196px",
    height: height ? height : "363px",
    flexDirection: "column",
    margin: "0.5rem",
    color: "#F5F5F5",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    letterSpacing: "0.3px",
    marginBottom: "2rem",
  })
);

export const AnimeYearGenreContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 10,
}));

export const StarIconContainer = styled("div")<{ height?: number }>(
  ({ height }) => ({
    display: "flex",
    height: "2rem",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    position: "absolute",
    top: height ? "85.4%" : "87.4%",
    backgroundColor: "#1CBA6E",
    color: "white",
    padding: "5px",
    borderRadius: "0 1rem",
  })
);
