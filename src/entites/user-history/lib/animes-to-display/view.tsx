"use client";
import { FC } from "react";
import { AnimesToDisplayProps } from "./types";
import { Anime } from "@/shared/components/anime";
import { StyledAnimeList } from "./styles";

export const AnimesToDisplay: FC<AnimesToDisplayProps> = ({
  animes,
  isLoading,
}) => {
  if (isLoading) return null;
  return (
    <StyledAnimeList>
      {animes &&
        animes.map((anime) => (
          <Anime anime={anime} key={anime.anime_id} width={157} height={228} />
        ))}
    </StyledAnimeList>
  );
};
