"use client";
import Link from "next/link";
import { StyledSpan, StyledLogo } from "./styles";
import { useMediaQuery } from "@mui/material";

export const Logo = () => {
  const isMobile = useMediaQuery("(max-width: 1600px)");
  return isMobile ? (
    <Link href="/" style={{ textDecoration: "none", justifyContent: "right" }}>
      <StyledLogo>
        ENSHI<StyledSpan>.</StyledSpan>
      </StyledLogo>{" "}
    </Link>
  ) : (
    <Link href="/" style={{ textDecoration: "none" }}>
      <StyledLogo>
        ENSHI<StyledSpan>.</StyledSpan>
      </StyledLogo>{" "}
    </Link>
  );
};
