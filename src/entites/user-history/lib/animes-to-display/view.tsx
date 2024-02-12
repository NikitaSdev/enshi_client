"use client";
import { FC } from "react";
import { AnimesToDisplayProps } from "./types";
import { Anime } from "@/shared/components/anime";
import { StyledAnimeList } from "./styles";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

export const AnimesToDisplay: FC<AnimesToDisplayProps> = ({
  animes,
  isLoading,
}) => {
  const isMobile = useMediaQuery("(max-width: 420px)");
  if (isLoading) return null;
  return (
    <StyledAnimeList>
      {animes &&
        animes.map((anime, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.07 * index }}
            key={anime.anime_id}
          >
            <Anime
              anime={anime}
              width={isMobile ? undefined : 157}
              height={isMobile ? undefined : 228}
            />
          </motion.div>
        ))}
    </StyledAnimeList>
  );
};
