"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IRegister } from "./types";
import {
  FormDiv,
  StyledContainer,
  StyledDiv,
  StyledForm,
  StyledNotificationError,
} from "@/screens/register-page/styles";
import { Input } from "@/shared/components/input";
import { Box, Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import authAnineSlider from "@/assets/images/animeSliderAuth.svg";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { MainContainer } from "@/shared/containers/main-container";

export const RegisterPage = () => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.user) {
      router.push("/");
    }
  }, [data, router]);
  const { register, handleSubmit, setError, formState } = useForm<IRegister>();

  const onSubmit = async (data: IRegister) => {
    await axios.post("/api/register", data);
    router.push("/login");
  };

  const isMobile = useMediaQuery("(max-width: 1600px)");
  return (
    <MainContainer>
      <StyledContainer>
        <FormDiv>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledDiv
              style={{
                color: "#FFF",
                fontFamily: "Montserrat",
                fontStyle: "bold",
                fontWeight: 700,
                fontSize: "30px",
                marginBottom: "3.1875rem",
                letterSpacing: "2px",
              }}
            >
              Регистрация
            </StyledDiv>
            <StyledDiv>
              <Input
                {...register("email", {
                  required: "Это поле является обязательным",
                })}
                type="email"
                placeholder={"E-mail"}
                style={{ width: "100%" }}
              />
            </StyledDiv>
            {formState.errors.email && (
              <StyledNotificationError>
                {formState.errors.email.message}
              </StyledNotificationError>
            )}
            <StyledDiv style={{ marginTop: "1.875rem" }}>
              <Input
                {...register("login", {
                  required: "Это поле является обязательным",
                })}
                type="login"
                placeholder={"Введите логин"}
                style={{ width: "100%" }}
              />
            </StyledDiv>
            {formState.errors.login && (
              <StyledNotificationError>
                {formState.errors.login.message}
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.875rem",
                gap: 2,
              }}
            >
              <Button type="submit">Регистрация</Button>
              <Link href={"/login"} style={{ textDecoration: "none" }}>
                <Button
                  type={"button"}
                  sx={{ background: "none", color: "#FFF" }}
                >
                  Авторизация
                </Button>
              </Link>
            </Box>
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
      </StyledContainer>{" "}
    </MainContainer>
  );
};
