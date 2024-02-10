"use client";
import { FC } from "react";
import { UserHistoryProps } from "./types";
import { useUserHistoryMode } from "@/shared/context/history-mode";
import { getFavourite, getViewed } from "./model";
import { useQuery } from "@tanstack/react-query";
import { TypeSwitcher } from "./lib/type-switcher";
import { AnimesToDisplay } from "./lib/animes-to-display/view";
import { AnimeContainer } from "@/entites/user-history/lib/type-switcher/styles";

export const UserHistory: FC<UserHistoryProps> = ({ user_id }) => {
  const { mode } = useUserHistoryMode();
  const functionMapping = {
    viewed: getViewed,
    favourite: getFavourite,
  };

  const queryFn = functionMapping[mode];

  const { data, isLoading } = useQuery({
    queryKey: ["get-user-history", mode],
    queryFn: async () => queryFn(user_id),
  });

  return (
    <>
      <TypeSwitcher />
      <AnimeContainer>
        <AnimesToDisplay animes={data} isLoading={isLoading} />
      </AnimeContainer>
    </>
  );
};
