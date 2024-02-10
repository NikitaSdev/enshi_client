import { FC } from "react";
import { IAnimeInfo } from "./types";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { FavouriteButton } from "./lib/favourite-button";
import {
  StyledContainer,
  StyledTextContainer,
  TextCard,
  TextContainers,
} from "@/screens/anime-page/styles";

export const AnimeInfo: FC<IAnimeInfo> = ({ anime }) => {
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
          width={200}
          height={300}
          style={{ borderRadius: "1rem" }}
        />
        <StyledTextContainer>
          <Typography
            variant="h2"
            sx={{ fontWeight: 700, fontSize: 23 }}
            style={{ margin: "0rem 0rem 2rem 3.25rem" }}
          >
            {anime.title}
          </Typography>
          <TextContainers>
            <TextCard>
              <Typography variant="subtitle2" fontSize={14}>
                <pre>{data.year}</pre>
              </Typography>
              <Typography fontSize={14}> {anime.year} г.</Typography>
            </TextCard>
            <TextCard>
              <Typography variant="subtitle2" fontSize={14}>
                <pre>{data.genre}</pre>
              </Typography>
              <Typography fontSize={14}>
                {anime.material_data.genres.slice(0, 2).join(", ")}
              </Typography>
            </TextCard>
            <TextCard>
              <Typography variant="subtitle2" fontSize={14}>
                <pre>{data.episode}</pre>
              </Typography>
              <Typography fontSize={14}>
                {anime.last_episode}/{anime.episodes_count}
              </Typography>
            </TextCard>
          </TextContainers>
          <Typography style={{ margin: "0rem 0rem 2rem 3.25rem" }}>
            {anime.material_data.description}
          </Typography>
          <Box style={{ margin: "0rem 0rem 2rem 3.25rem" }}>
            <FavouriteButton anime_id={anime.anime_id} />
          </Box>
        </StyledTextContainer>
      </StyledContainer>
    </>
  );
};
