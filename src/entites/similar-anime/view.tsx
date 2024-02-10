"use client";

import { FC } from "react";
import { ISimilarAnime } from "./types";
import { AnimeRow } from "../anime-row";
import { useQuery } from "@tanstack/react-query";
import { getSimilarAnime } from "./model";
import { IAnime } from "@/shared/types/anime.types";
import { Typography } from "@mui/material";
import { Slider } from "@/shared/components/slider";
import { Anime } from "@/shared/components/anime";

export const SimilarAnime: FC<ISimilarAnime> = ({ anime }) => {
  const { data: animes, isLoading } = useQuery({
    queryKey: ["get-similar-anime"],
    queryFn: async () => await getSimilarAnime(anime),
  });

  return (
    !isLoading &&
    animes && (
      <div style={{ marginBottom: 30 }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: 23 }}
          variant={"h2"}
          mt={3}
          mb={2}
        >
          Похожие
        </Typography>
        <Slider
          centeredControls
          isLoading={isLoading}
          sliders={animes.map((item) => (
            <Anime anime={item as IAnime} key={item.anime_id} />
          ))}
        />
      </div>
    )
  );
};
