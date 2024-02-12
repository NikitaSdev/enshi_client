"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IAuth } from "./types";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Input } from "@/shared/components/input";
import {
  FormDiv,
  StyledButtonContainer,
  StyledContainer,
  StyledDiv,
  StyledForm,
  StyledNotificationError,
} from "@/screens/auth-page/styles";
import authAnineSlider from "@/assets/images/animeSliderAuth.svg";
import Image from "next/image";
import Link from "next/link";
import { MainContainer } from "@/shared/containers/main-container";

export const AuthPage: FC = () => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
  }, [data, router]);

  const { register, handleSubmit, setError, formState } = useForm<IAuth>();

  const onSubmit = async (data: IAuth) => {
    const res = await signIn("credentials", {
      email: data.emailOrLogin,
      login: data.emailOrLogin,
      password: data.password,
      redirect: false,
    });

    res?.ok && router.push("/");
  };

  const isMobile = useMediaQuery("(max-width: 1600px)");

  return (
    <MainContainer>
      <StyledContainer>
        <FormDiv>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography
              style={{
                color: "#FFF",
                fontStyle: "bold",
                fontWeight: 700,
                fontSize: "30px",
                marginBottom: "3.1875rem",
                letterSpacing: "2px",
              }}
            >
              Авторизация
            </Typography>
            <StyledDiv>
              <Input
                {...register("emailOrLogin", {
                  required: "Это поле является обязательным",
                })}
                type="text"
                placeholder={"E-mail или логин"}
                style={{ width: "100%" }}
              />
            </StyledDiv>
            {formState.errors.emailOrLogin && (
              <StyledNotificationError>
                {formState.errors.emailOrLogin.message}
              </StyledNotificationError>
            )}
            <StyledDiv style={{ marginTop: "1.875rem" }}>
              <Input
                {...register("password", {
                  required: "Это поле является обязательным",
                  minLength: {
                    value: 6,
                    message: "Пароль должен быть не менее 6 символов",
                  },
                })}
                type="password"
                placeholder={"Введите пароль"}
                style={{ width: "100%" }}
              />
            </StyledDiv>
            {formState.errors.password && (
              <StyledNotificationError>
                {formState.errors.password.message}
              </StyledNotificationError>
            )}
            <StyledButtonContainer>
              <Button type="submit">Войти на сайт</Button>
              <Link href={"/register"} style={{ textDecoration: "none" }}>
                <Button
                  type={"button"}
                  sx={{ background: "none", color: "#FFF" }}
                >
                  Регистрация
                </Button>
              </Link>
            </StyledButtonContainer>
          </StyledForm>
        </FormDiv>
        {!isMobile && (
          <StyledDiv style={{ height: "100%", width: "50%" }}>
            <Image
              alt={"Аниме слайдер на загрузочной странице"}
              src={authAnineSlider}
              height={1000}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                overflow: "hidden",
              }}
            />
          </StyledDiv>
        )}
      </StyledContainer>
    </MainContainer>
  );
};
