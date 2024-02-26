"use client";
import { FC, useState } from "react";
import { IHomePage } from "./types";
import { HomeSlider } from "@/entites/home-slider";
import { AnimeList } from "@/entites/anime-list";
import { AnimeTypeSwitcher } from "@/features/anime-type-switcher";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Ic_Chevron from "@/assets/icons/ic_chevron__sm.svg";
import { AnimeFilterProvider } from "@/shared/context/anime-filter";
import { MainContainer } from "@/shared/containers/main-container";
import { Slider } from "@/shared/components/slider";
import { Anime } from "@/shared/components/anime";

export const HomePage: FC<IHomePage> = ({
  sliders,
  highRatedAnime,
  highRatedAnimeCount,
  popular,
}) => {
  const [type, setType] = useState<"new" | "high-rated">("high-rated");
  return (
    <main>
      <HomeSlider sliders={sliders} />
      <MainContainer>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 2, mt: 10, mb: 3 }}
        >
          <Link href={"/catalog"}>
            <Typography variant={"h2"} mt={2}>
              Популярное
            </Typography>
          </Link>{" "}
          <span style={{ marginTop: 20 }}>
            <Image src={Ic_Chevron} alt={"Смотреть аниме "} />
          </span>
        </Box>
        <Slider
          centeredControls
          sliders={popular.map((item) => (
            <Anime anime={item} key={item.anime_id} />
          ))}
          isLoading={false}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignitems: "flex-start",
            mt: 5,
            "@media(max-width: 560px)": { flexDirection: "column", gap: 2 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link href={"/catalog"}>
              <Typography variant={"h2"}>Смотреть аниме </Typography>
            </Link>
            <span style={{ marginLeft: 5, marginTop: 5 }}>
              <Image src={Ic_Chevron} alt={"Смотреть аниме"} />
            </span>
          </Box>

          <AnimeTypeSwitcher type={type} setType={setType} />
        </Box>
        <AnimeFilterProvider>
          <AnimeList
            anime={highRatedAnime}
            count={highRatedAnimeCount}
            type={type}
          />
        </AnimeFilterProvider>
      </MainContainer>
    </main>
  );
};
