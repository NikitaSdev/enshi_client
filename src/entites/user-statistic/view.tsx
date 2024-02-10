"use client";
import { FC } from "react";
import { UserStatisticProps } from "./types";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { getUserStatistic } from "./model";
import { useQuery } from "@tanstack/react-query";
import {
  HrLine,
  StyledContainer,
  StyledStaticBox,
  TextContainer,
  Title,
} from "@/entites/user-statistic/styles";

export const UserStatistic: FC<UserStatisticProps> = ({ user_id }) => {
  const isMobile = useMediaQuery("(max-width: 1600px)");
  const { data: statistic, isLoading } = useQuery({
    queryKey: ["get-user-statistic"],
    queryFn: async () => await getUserStatistic(user_id),
  });

  if (isLoading) return null;
  return isMobile ? (
    <></>
  ) : (
    <StyledContainer>
      <StyledStaticBox>
        <Title>Статистика</Title>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
            Просмотрено
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, color: "#C0A1FF" }}
            >
              {statistic?.watched_animes}
            </Typography>
          </Box>
        </TextContainer>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
            В избранном
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, color: "#C0A1FF" }}
            >
              {statistic?.favourite_anime}
            </Typography>
          </Box>
        </TextContainer>
      </StyledStaticBox>
      <HrLine />
      <StyledStaticBox>
        <Title>Всего</Title>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
            Аниме
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, color: "#C0A1FF" }}
            >
              {statistic?.watched_animes}
            </Typography>
          </Box>
        </TextContainer>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
            Эпизодов
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, color: "#C0A1FF" }}
            >
              {statistic?.all_watched_episodes}
            </Typography>
          </Box>
        </TextContainer>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 14 }}>
            Часов
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 14, color: "#C0A1FF" }}
            >
              {statistic?.watch_time}
            </Typography>
          </Box>
        </TextContainer>
      </StyledStaticBox>
    </StyledContainer>
  );
};
