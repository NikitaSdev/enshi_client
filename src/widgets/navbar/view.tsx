"use client";

import { SearchAnime } from "@/features/search-anime";
import { Logo } from "@/shared/components/logo";
import { ProfileButton } from "@/shared/components/profile-button";
import { SocialLinks } from "@/shared/components/social-links";
import { Menu } from "./lib/menu";
import { StyledContainer, StyledHeader } from "./styles";
import { useMediaQuery } from "@mui/material";

export const NavBar = () => {
  const isTablet = useMediaQuery("(max-width: 774px)");
  const isMobile = useMediaQuery("(max-width: 460px)");

  return (
    <StyledHeader>
      <StyledContainer>
        <Menu />

        {!isMobile && <Logo />}

        <SearchAnime />

        <SocialLinks />

        {!isTablet && <ProfileButton />}
      </StyledContainer>
    </StyledHeader>
  );
};
