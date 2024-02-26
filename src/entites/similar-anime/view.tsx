"use client";

import { FC, useEffect, useState } from "react";
import { ISimilarAnime } from "./types";
import { AnimeRow } from "../anime-row";
import { useQuery } from "@tanstack/react-query";
import { getSimilarAnime } from "./model";
import { IAnime } from "@/shared/types/anime.types";
import { Typography, useMediaQuery } from "@mui/material";
import { Slider } from "@/shared/components/slider";
import { Anime } from "@/shared/components/anime";

export const SimilarAnime: FC<ISimilarAnime> = ({ anime }) => {
  const { data: animes, isLoading } = useQuery({
    queryKey: ["get-similar-anime"],
    queryFn: async () => await getSimilarAnime(anime),
  });
  const isTablet = useMediaQuery("(max-width:744px)");
  const isMobile = useMediaQuery("(max-width:530px)");
  const isVerySmallMobile = useMediaQuery("(max-width:480px)");
  const [size, setSize] = useState<{
    height: number | undefined;
    width: number | undefined;
  }>({ height: undefined, width: undefined });

  useEffect(() => {
    if (isTablet && !isMobile) {
      setSize({ height: 250, width: 165 });
    } else if (isMobile && !isVerySmallMobile) {
      setSize({ height: 235, width: 140 });
    } else if (isVerySmallMobile) {
      setSize({ height: 220, width: 130 });
    } else {
      setSize({ height: undefined, width: undefined });
    }
  }, [isTablet, isMobile, isVerySmallMobile]);

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
            <Anime
              anime={item as IAnime}
              key={item.anime_id}
              width={size.width}
              height={size.height}
            />
          ))}
        />
      </div>
    )
  );
};
