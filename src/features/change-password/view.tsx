"use client";

import { Input } from "@/shared/components/input";
import { Typography } from "@mui/material";
import { StyledButton, StyledContainer } from "./styles";
import { signOut, useSession } from "next-auth/react";
import { updatePassword } from "./model";
import { useState } from "react";
import { redirect } from "next/navigation";

export const ChangePassword = () => {
  const { data } = useSession();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [isError, setIsError] = useState(false);

  const user: any = data?.user;

  const handleUpdate = async () => {
    try {
      await updatePassword(oldPassword, newPassword, user?.id);
      setIsError(false);
      await signOut();
      redirect("/login");
    } catch (e) {
      setIsError(true);
    }
  };

  const isPasswordMatch =
    newPassword === "" ? true : newPassword === newPasswordRepeat;

  const isValidLength = (passwd: string) =>
    passwd.length >= 5 && passwd.length <= 16;

  return (
    <StyledContainer>
      <Typography variant="subtitle1" sx={{ fontSize: 20 }} mt={1}>
        Сменить пароль
      </Typography>
      <Input
        placeholder="Старый пароль"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        style={{ marginTop: 10 }}
      />
      {isError && (
        <Typography variant="subtitle1" mt={1}>
          Пароль неверный
        </Typography>
      )}
      <Input
        placeholder="Новый пароль"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{ marginTop: 10 }}
      />
      {newPassword && !isValidLength(newPassword) && (
        <Typography variant="subtitle1" mt={1}>
          Пароль должен содержать от 5 до 16 символов
        </Typography>
      )}
      <Input
        placeholder="Повторите пароль"
        value={newPasswordRepeat}
        onChange={(e) => setNewPasswordRepeat(e.target.value)}
        style={{ marginTop: 10 }}
      />
      {!isPasswordMatch && (
        <Typography variant="subtitle1" mt={1}>
          Пароли не совпадают
        </Typography>
      )}

      <StyledButton
        disabled={
          !newPassword ||
          !isPasswordMatch ||
          !oldPassword ||
          !isValidLength(newPassword)
        }
        onClick={handleUpdate}
      >
        Сохранить
      </StyledButton>
    </StyledContainer>
  );
};
