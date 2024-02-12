"use server";

import prisma from "@/configs/prisma.config";

export const asyncUpdateCredentials = async (
  login: string,
  email: string,
  id: number
) => {
  try {
    await prisma?.user.update({
      data: { email, login },
      where: { id },
    });
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
