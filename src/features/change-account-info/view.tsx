"use client";
import { Input } from "@/shared/components/input";
import { Typography } from "@mui/material";
import { StyledContainer, StyledButton } from "./styles";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { asyncUpdateCredentials } from "./model";

export const ChangeAccountInfo = () => {
  const { data, update } = useSession();

  const user: any = data?.user;

  const [email, setEmail] = useState(user?.email);
  const [login, setLogin] = useState(user?.email);

  useEffect(() => {
    setEmail(user?.email);
    setLogin(user?.login);
  }, [data]);

  console.log(data);
  const handleClick = async () => {
    await asyncUpdateCredentials(login, email, user?.id);
    await update({ ...data, user: { email, login } });
  };

  const validateForm = (login: string, email: string) => {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const isEmailValid = emailRegex.test(email);
    // const isLoginValid = login.length >= 4 && login.length <= 16;

    // return isEmailValid && isLoginValid;
    return true;
  };

  return (
    <StyledContainer>
      <Typography variant="subtitle1" sx={{ fontSize: 20 }} mt={2}>
        Логин
      </Typography>
      <Input
        placeholder="Новый логин"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        style={{ marginTop: 10 }}
      />
      <Typography variant="subtitle1" sx={{ fontSize: 20 }} mt={2}>
        Почта
      </Typography>
      <Input
        style={{ marginTop: 10 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Новая почта"
      />

      <StyledButton
        disabled={!validateForm(login, email)}
        onClick={handleClick}
      >
        Сохранить
      </StyledButton>
    </StyledContainer>
  );
};
