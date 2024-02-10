"use client";
import { ProfileWallpaper } from "@/shared/components/profile-wallpaper";
import { Box, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  StyledAvatarChangeButton,
  StyledAvatarContainer,
  StyledContainer,
  StyledWallpaperChangeButton,
  WallpaperContainer,
} from "./styles";

export const ChangePhotos = () => {
  const { data } = useSession();
  const user = data?.user as {
    wallpaper_url: string;
    avatar_url: string;
    login: string;
  };

  return (
    user && (
      <StyledContainer>
        <WallpaperContainer>
          <Image
            src={user?.wallpaper_url}
            alt="Обложка"
            fill
            objectFit="cover"
            objectPosition="center"
            style={{ borderRadius: 10 }}
          />
          <StyledWallpaperChangeButton>Сменить</StyledWallpaperChangeButton>
        </WallpaperContainer>
        <StyledAvatarContainer>
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={100}
            height={100}
            style={{ borderRadius: 10, zIndex: 10 }}
          />
          <StyledAvatarChangeButton>Сменить</StyledAvatarChangeButton>
        </StyledAvatarContainer>
      </StyledContainer>
    )
  );
};
