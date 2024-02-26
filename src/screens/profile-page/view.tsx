"use client";

import { FC } from "react";
import { ProfilePageProps } from "./types";
import { ProfileWallpaper } from "@/shared/components/profile-wallpaper";
import { UserStatistic } from "@/entites/user-statistic";
import { UserHistory } from "@/entites/user-history";
import { UserHistoryModeProvider } from "@/shared/context/history-mode";
import { UserCard } from "@/widgets/user-card";
import {
  UserHistoryContainer,
  UserProfileContainer,
  UserProfileDataContainer,
} from "@/screens/profile-page/styles";
import { useMediaQuery } from "@mui/material";
import { MainContainer } from "@/shared/containers/main-container";

export const ProfilePage: FC<ProfilePageProps> = ({ user }) => {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  return isMobile ? (
    <>
      <ProfileWallpaper wallpaper_url={user.wallpaper_url} />
      <MainContainer>
        <UserCard />
        <UserStatistic user_id={user.id} />
        <UserHistoryContainer style={{ margin: "1rem 0" }}>
          <UserHistoryModeProvider>
            <UserHistory user_id={user.id} />
          </UserHistoryModeProvider>
        </UserHistoryContainer>
      </MainContainer>
    </>
  ) : (
    <>
      <ProfileWallpaper wallpaper_url={user.wallpaper_url} />
      <MainContainer>
        <UserProfileContainer>
          <UserProfileDataContainer>
            <UserCard />
            <UserStatistic user_id={user.id} />
          </UserProfileDataContainer>
          <UserHistoryContainer>
            <UserHistoryModeProvider>
              <UserHistory user_id={user.id} />
            </UserHistoryModeProvider>
          </UserHistoryContainer>
        </UserProfileContainer>
      </MainContainer>
    </>
  );
};
