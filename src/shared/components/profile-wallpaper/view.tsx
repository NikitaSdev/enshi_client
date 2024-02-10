"use client";
import { FC } from "react";
import { ProfileWallpaperProps } from "./types";
import Image from "next/image";

export const ProfileWallpaper: FC<ProfileWallpaperProps> = ({
  wallpaper_url,
}) => {
  return (
    <section
      style={{
        width: "100%",
        height: 450,
        position: "relative",
      }}
    >
      <Image
        src={wallpaper_url}
        alt={"Обои Профиля"}
        fill
        objectFit={"cover"}
        objectPosition="center"
      />
    </section>
  );
};
