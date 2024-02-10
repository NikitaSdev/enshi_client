"use client";

import { FC, useCallback, useState } from "react";
import { getYears } from "@/shared/hooks/get-years";
import { getAnimeStatusList } from "@/shared/hooks/get-anime-status-list";
import { useQuery } from "@tanstack/react-query";
import { getGenreFilters } from "./model";
import { FilterButton } from "./lib/filter-button";
import { FilterPopover } from "@/features/anime-filter/lib/filter-popover/view";
import React from "react";
import { FilterType, IAnimeFilterType } from "@/features/anime-filter/types";
import { Box, Typography } from "@mui/material";

export const AnimeFilter: FC = () => {
  const yearFilters = getYears();
  const statusFilters = getAnimeStatusList();
  const { data: genres, isLoading } = useQuery({
    queryKey: ["get-genres"],
    queryFn: async () => await getGenreFilters(),
  });
  const [open, setOpen] = useState<boolean>(false);

  const [type, setType] = useState<IAnimeFilterType>("genre");

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, type: IAnimeFilterType) => {
      setType(type);
      setAnchorEl(event.currentTarget);
      setOpen(true);
    },
    []
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
    setOpen(false);
  }, []);

  if (!isLoading && !genres) return null;

  const filters = {
    years: yearFilters as FilterType[],
    statuses: statusFilters as FilterType[],
    genres: genres as FilterType[],
  };

  return (
    <Box
      sx={{
        mt: 10,
        mb: 5,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 5,
      }}
    >
      <Typography variant={"h2"} sx={{ fontSize: 23, fontWeight: 700 }}>
        Каталог
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mr: 5, flexWrap: "wrap" }}>
        <FilterButton label={"Жанр"} onClick={handleOpen} type={"genre"} />
        <FilterButton label={"Год"} onClick={handleOpen} type={"year"} />
        <FilterButton label={"Статус"} onClick={handleOpen} type={"status"} />
        <FilterPopover
          filters={filters}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          type={type}
        />{" "}
      </Box>
    </Box>
  );
};
