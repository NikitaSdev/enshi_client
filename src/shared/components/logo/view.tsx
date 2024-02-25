"use client";
import Link from "next/link";
import { StyledSpan, StyledLogo } from "./styles";
import { useMediaQuery } from "@mui/material";

export const Logo = () => {
  const isMobile = useMediaQuery("(max-width: 1600px)");
  return (
    <Link
      href="/"
      style={
        isMobile
          ? { textDecoration: "none", justifyContent: "right" }
          : { textDecoration: "none" }
      }
    >
      <StyledLogo style={{ fontFamily: "var(--font-aqum)" }}>
        ENSHI<StyledSpan>.</StyledSpan>
      </StyledLogo>{" "}
    </Link>
  );
};
