import { FC } from "react";
import { ITopPage } from "./types";
import { AnimeList } from "@/entites/anime-list";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Ic_Star from "@/assets/icons/ic_star.svg";
import { AnimeFilterProvider } from "@/shared/context/anime-filter";
import { MainContainer } from "@/shared/containers/main-container";

export const TopPage: FC<ITopPage> = ({ anime, count }) => {
  return (
    <MainContainer>
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 2, mt: 10, mb: 5 }}
      >
        <Typography variant={"h2"} sx={{ fontSize: 23, fontWeight: 700 }}>
          ТОП - 100 аниме
        </Typography>{" "}
        <Image
          src={Ic_Star}
          alt={"ТОП - 100 аниме"}
          style={{ marginBottom: 5 }}
        />
      </Box>
      <AnimeFilterProvider>
        <AnimeList anime={anime} count={count} type={"top"} />
      </AnimeFilterProvider>
    </MainContainer>
  );
};
