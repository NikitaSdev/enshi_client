"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import {
  StyledAvatarChangeButton,
  StyledAvatarContainer,
  StyledContainer,
  StyledWallpaperChangeButton,
  WallpaperContainer,
} from "./styles";
import { useRef } from "react";
import { changeAvatar, changeWallpaper } from "./model";
import { uploadService } from "./api";

export const ChangePhotos = () => {
  const { data, update } = useSession();
  const wallpaperInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const user = data?.user as {
    wallpaper_url: string;
    avatar_url: string;
    login: string;
    id: number;
  };
  const handleWallpaperChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const data = await uploadService.upload(files[0], "wallpapers");
      await changeWallpaper(data[0].url, user?.id);
      await update({ ...data, user: { wallpaper_url: data[0].url } });
    }
    if (wallpaperInputRef.current) {
      wallpaperInputRef.current.value = "";
    }
  };

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const data = await uploadService.upload(files[0], "avatars");
      await changeAvatar(data[0].url, user?.id);
      console.log(data[0].url);
      await update({ ...data, user: { avatar_url: data[0].url } });
    }
    if (wallpaperInputRef.current) {
      wallpaperInputRef.current.value = "";
    }
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
          <input
            type="file"
            ref={wallpaperInputRef}
            onChange={handleWallpaperChange}
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .gif, .png"
          />
          <StyledWallpaperChangeButton
            onClick={() => wallpaperInputRef.current?.click()}
          >
            Сменить
          </StyledWallpaperChangeButton>
        </WallpaperContainer>
        <StyledAvatarContainer>
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={100}
            height={100}
            style={{ borderRadius: 10, zIndex: 10 }}
          />
          <input
            type="file"
            ref={avatarInputRef}
            onChange={handleAvatarChange}
            style={{ display: "none" }}
            accept=".jpg, .jpeg, .gif, .png"
          />
          <StyledAvatarChangeButton
            onClick={() => avatarInputRef.current?.click()}
          >
            Сменить
          </StyledAvatarChangeButton>
        </StyledAvatarContainer>
      </StyledContainer>
    )
  );
};
