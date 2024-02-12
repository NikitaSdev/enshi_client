"use client";

import { FC, useEffect, useState } from "react";
import { IAnimeList } from "./types";
import { Pagination } from "@/shared/components/pagination";
import { Anime } from "@/shared/components/anime";
import { useQuery } from "@tanstack/react-query";
import { getCatalog, getHighRated, getNew, getTop } from "./model";
import { IAnime } from "@/shared/types/anime.types";
import { useAnimeFilters } from "@/shared/context/anime-filter";
import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export const AnimeList: FC<IAnimeList> = ({ anime, count, type }) => {
  const [page, setPage] = useState<number>(1);
  const isTablet = useMediaQuery("(max-width:744px)");
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallMobile = useMediaQuery("(max-width:420px)");

  const [size, setSize] = useState<{
    height: number | undefined;
    width: number | undefined;
  }>({ height: undefined, width: undefined });
  const [isRendered, setIsDataProceed] = useState<boolean>(false);

  const { genres, statuses, years } = useAnimeFilters();
  const queryFnMapping = {
    catalog: getCatalog,
    top: getTop,
    "high-rated": getHighRated,
    new: getNew,
  };
  useEffect(() => {
    if (isTablet && !isMobile) {
      setSize({ height: 250, width: 165 });
    } else if (isMobile && !isSmallMobile) {
      setSize({ height: 240, width: 150 });
    } else if (isSmallMobile) {
      setSize({ height: undefined, width: undefined });
    } else {
      setSize({ height: undefined, width: undefined });
    }
  }, [isTablet, isMobile, isSmallMobile]);
  const { data: animes, isLoading } = useQuery({
    queryKey: [type, page, genres, years, statuses],
    queryFn: async () => {
      if (type === "catalog") {
        const queryFn = queryFnMapping[type];
        const data = await queryFn({ page }, { genres, years, statuses });
        setIsDataProceed(true);
        return data;
      } else {
        const queryFn = queryFnMapping[type];
        const data = await queryFn({ page });
        setIsDataProceed(true);
        return data;
      }
    },

    initialData: !isRendered
      ? { anime: anime as IAnime[], count }
      : { anime: [] as IAnime[], count },
  });

  if (isLoading) return null;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: isMobile ? 0.5 : 2,
        }}
      >
        {animes?.anime &&
          animes.anime.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.07 * index }}
              key={item.anime_id}
            >
              <Anime
                anime={item as IAnime}
                height={size.height}
                width={size.width}
              />{" "}
            </motion.div>
          ))}{" "}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 10,
          mt: 5,
        }}
      >
        <Pagination
          count={type === "catalog" ? animes?.count : count}
          setPage={setPage}
        />
      </Box>
    </div>
  );
};
