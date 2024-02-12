import { FC } from "react";
import { IAnimeInfo } from "./types";
import Image from "next/image";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { FavouriteButton } from "./lib/favourite-button";
import {
  StyledContainer,
  StyledTextContainer,
  TextCard,
  TextContainers,
} from "@/screens/anime-page/styles";

export const AnimeInfo: FC<IAnimeInfo> = ({ anime }) => {
  const isMobile = useMediaQuery("(max-width: 800px)");

  const data = {
    year: "Год: ",
    genre: "Жанр: ",
    episode: "Эпизоды: ",
  };
  return (
    <>
      <StyledContainer>
        <Image
          src={anime.material_data.poster_url}
          alt={anime.title}
          width={isMobile ? 300 : 200}
          height={isMobile ? 430 : 300}
          style={{ borderRadius: "1rem" }}
        />
        <StyledTextContainer>
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: 23 }}>
            {anime.title}
          </Typography>
          <TextContainers>
            <TextCard>
              <Typography variant="subtitle2" fontSize={14}>
                <pre>{data.year}</pre>
              </Typography>
              <Typography variant="subtitle1" mt={-0.1} fontSize={14}>
                {anime.year} г.
              </Typography>
            </TextCard>
            <TextCard>
              <Typography variant="subtitle2" fontSize={14}>
                <pre>{data.genre}</pre>
              </Typography>
              <Typography variant="subtitle1" mt={-0.1} fontSize={14}>
                {anime.material_data.genres.slice(0, 2).join(", ")}
              </Typography>
            </TextCard>
            <TextCard>
              <Typography variant="subtitle2" fontSize={14}>
                <pre>{data.episode}</pre>
              </Typography>
              <Typography variant="subtitle1" mt={-0.1} fontSize={14}>
                {anime.last_episode}/{anime.episodes_count}
              </Typography>
            </TextCard>
          </TextContainers>
          <Typography variant="subtitle1" fontSize={16} mt={3}>
            {anime.material_data.description.length > 440
              ? anime.material_data.description.slice(0, 440) + "..."
              : anime.material_data.description}
          </Typography>
          <Box sx={{ mt: 3 }}>
            <FavouriteButton anime_id={anime.anime_id} />
          </Box>
        </StyledTextContainer>
      </StyledContainer>
    </>
  );
};
