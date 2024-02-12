"use server";

import bcrypt from "bcrypt";
import prisma from "@/configs/prisma.config";

export const updatePassword = async (
  oldPassword: string,
  newPassword: string,
  id: number
) => {
  try {
    const user = await prisma?.user.findUnique({
      where: { id },
    });

    const passwordsMatch = await bcrypt.compare(
      oldPassword,
      String(user?.password)
    );

    if (!passwordsMatch) throw new Error(`Пароль неверный`);

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      data: { password: hashedPassword },
      where: { id },
    });
  } catch (e: any) {
    console.error(e);
    throw new Error(e);
  }
};
