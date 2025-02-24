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
  const isMobile = useMediaQuery("(max-width: 1000px)");
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
        <Typography
          variant="h2"
          sx={{ fontSize: 23, fontWeight: 700 }}
          mt={2}
          mb={2}
        >
          Статистика
        </Typography>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
            Просмотрено
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 16, color: "#C0A1FF" }}
            >
              {statistic?.watched_animes}
            </Typography>
          </Box>
        </TextContainer>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
            В избранном
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 16, color: "#C0A1FF" }}
            >
              {statistic?.favourite_anime}
            </Typography>
          </Box>
        </TextContainer>
      </StyledStaticBox>
      <HrLine />
      <StyledStaticBox>
        <Typography
          variant="h2"
          sx={{ fontSize: 23, fontWeight: 700 }}
          mt={2}
          mb={2}
        >
          Всего
        </Typography>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
            Аниме
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 16, color: "#C0A1FF" }}
            >
              {statistic?.watched_animes}
            </Typography>
          </Box>
        </TextContainer>
        <TextContainer>
          <Typography variant="subtitle2" sx={{ fontSize: 16 }}>
            Эпизодов
          </Typography>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 16, color: "#C0A1FF" }}
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
