"use client";
import { FC } from "react";
import { UserStatusProps } from "./types";
import { useQuery } from "@tanstack/react-query";
import { getViewedAnimeCount } from "./model";
import {
  StyledContainer,
  StyledTypography,
} from "@/shared/components/user-status/styles";
import { useMediaQuery } from "@mui/material";

export const UserStatus: FC<UserStatusProps> = ({ user_id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-user-viewed-count"],
    queryFn: async () => getViewedAnimeCount(user_id),
  });

  const getStatus = (viewedCount: number): string => {
    if (!viewedCount) return "Новичок";
    if (viewedCount < 3) return "Новичок";
    else if (viewedCount < 6) return "Знаток";
    else if (viewedCount < 10) return "Кохай";
    else if (viewedCount < 16) return "Семпай";
    else if (viewedCount < 23) return "Анимешник";
    else if (viewedCount < 28) return "Сэйто";
    else if (viewedCount < 32) return "Сенсей";
    else if (viewedCount < 36) return "Отаку";
    else if (viewedCount < 40) return "Профи";
    else if (viewedCount < 44) return "Гуру";
    else if (viewedCount < 50) return "Рассен Отаку";
    else if (viewedCount < 55) return "Господин";
    else if (viewedCount < 60) return "Хентайное божество";
    else return "Божество";
  };
  const isMobile = useMediaQuery("(max-width: 750px)");
  return isMobile ? (
    <StyledContainer style={{ width: "100%" }}>
      <StyledTypography>
        {!isLoading && data && getStatus(data)}
      </StyledTypography>
    </StyledContainer>
  ) : (
    <StyledContainer>
      <StyledTypography>
        {!isLoading && data && getStatus(data)}
      </StyledTypography>
    </StyledContainer>
  );
};
