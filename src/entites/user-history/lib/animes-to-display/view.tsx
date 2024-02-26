"use client";
import { FC, useEffect, useState } from "react";
import { AnimesToDisplayProps } from "./types";
import { Anime } from "@/shared/components/anime";
import { StyledAnimeList } from "./styles";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

export const AnimesToDisplay: FC<AnimesToDisplayProps> = ({
  animes,
  isLoading,
}) => {
  const isTablet = useMediaQuery("(max-width:744px)");
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallMobile = useMediaQuery("(max-width:420px)");
  const isVerySmallMobile = useMediaQuery("(max-width:380px)");
  const [size, setSize] = useState<{
    height: number | undefined;
    width: number | undefined;
  }>({ height: undefined, width: undefined });

  useEffect(() => {
    if (isTablet && !isMobile) {
      setSize({ height: 250, width: 165 });
    } else if (isMobile && !isSmallMobile) {
      setSize({ height: 240, width: 150 });
    } else if (isSmallMobile && !isVerySmallMobile) {
      setSize({ height: 230, width: 140 });
    } else if (isVerySmallMobile) {
      setSize({ height: undefined, width: undefined });
    } else {
      setSize({ height: undefined, width: undefined });
    }
  }, [isTablet, isMobile, isSmallMobile, isVerySmallMobile]);

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
            <Anime anime={anime} height={size.height} width={size.width} />
          </motion.div>
        ))}
    </StyledAnimeList>
  );
};
