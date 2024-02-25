import { IAnime } from "@/shared/types/anime.types";
import { FC } from "react";
import Image from "next/image";
import {
  AnimeCard,
  AnimeYearGenreContainer,
  StarIconContainer,
} from "@/shared/components/anime/styles";
import Link from "next/link";
import starIcon from "@/assets/icons/ic_star2.svg";
import { Box, Typography } from "@mui/material";
function numberToHexColor(num: number): string {
  const startColor = [242, 103, 44]; // #F2672C при значение 0 ебанул
  const endColor = [28, 186, 110]; // #1CBA6E при значение 10 ебанул

  const r = Math.round(
    startColor[0] + (endColor[0] - startColor[0]) * (num / 10)
  )
    .toString(16)
    .padStart(2, "0");
  const g = Math.round(
    startColor[1] + (endColor[1] - startColor[1]) * (num / 10)
  )
    .toString(16)
    .padStart(2, "0");
  const b = Math.round(
    startColor[2] + (endColor[2] - startColor[2]) * (num / 10)
  )
    .toString(16)
    .padStart(2, "0");

  return `#${r}${g}${b}`;
}
export const Anime: FC<{ anime: IAnime; width?: number; height?: number }> = ({
  anime,
  width,
  height,
}) => {
  const maxSymbols = height ? 28 : 32;
  if (!anime.material_data?.poster_url) return null;
  return (
    <Link href={`/anime/${anime.anime_id}`}>
      <AnimeCard
        width={width}
        height={isNaN(Number(height)) ? 363 : Number(height) + 80}
      >
        <div style={{ position: "relative" }}>
          <Image
            src={anime.material_data?.poster_url}
            alt={anime.title}
            width={width ? width : 196}
            height={height ? height : 280}
            style={{ borderRadius: "1rem" }}
          />
          <StarIconContainer
            height={height}
            style={{ background: `${numberToHexColor(anime.rating)}` }}
          >
            <Image src={starIcon} alt={"starIcon"} height={14} width={14} />
            {anime.rating}
          </StarIconContainer>
        </div>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: height ? 14 : 16, lineHeight: 1.3 }}
        >
          {anime.title.length > maxSymbols
            ? `${anime.title.slice(0, maxSymbols)}...`
            : anime.title}
        </Typography>
        <AnimeYearGenreContainer>
          <Typography variant="subtitle2" sx={{ fontSize: height ? 12 : 13 }}>
            {anime.year}
          </Typography>

          <Typography
            variant="subtitle2"
            sx={{ fontSize: height ? 12 : 13, textAlign: "right" }}
          >
            {anime.material_data?.anime_genres?.slice(0, 2).join("/") ||
              "Аниме"}
          </Typography>
        </AnimeYearGenreContainer>
      </AnimeCard>
    </Link>
  );
};
