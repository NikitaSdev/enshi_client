"use server";

import prisma from "@/configs/prisma.config";

export const changeWallpaper = async (url: string, id: number) => {
  try {
    await prisma?.user.update({
      where: { id },
      data: { wallpaper_url: url },
    });
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};

export const changeAvatar = async (url: string, id: number) => {
  try {
    await prisma?.user.update({
      where: { id },
      data: { wallpaper_url: url },
    });
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
