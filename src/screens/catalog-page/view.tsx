"use client";

import { FC } from "react";
import { ICatalogPage } from "./types";
import { AnimeList } from "@/entites/anime-list";
import { AnimeFilter } from "@/features/anime-filter";
import { AnimeFilterProvider } from "@/shared/context/anime-filter";
import { MainContainer } from "@/shared/containers/main-container";

export const CatalogPage: FC<ICatalogPage> = ({ anime, count }) => {
  return (
    <MainContainer>
      <main>
        <AnimeFilterProvider>
          <AnimeFilter />
          <AnimeList anime={anime} count={count} type={"catalog"} />
        </AnimeFilterProvider>
      </main>
    </MainContainer>
  );
};
