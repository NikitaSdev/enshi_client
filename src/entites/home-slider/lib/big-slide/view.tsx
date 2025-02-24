"use client";

import { FC, useEffect, useState } from "react";
import { BigSlideProps } from "./types";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { BigSlideContainer, StyledFade, StyledBodyContainer } from "./styles";
import Ic_Star from "@/assets/icons/ic_star.svg";
import Link from "next/link";

export const BigSlide: FC<BigSlideProps> = ({ slide }) => {
  let initialMaxDescriptionLenght = 120;
  const isMobile = useMediaQuery("(max-width: 740px)");

  const [maxDescriptionLenght, setMaxDescriptionLengh] = useState(
    initialMaxDescriptionLenght
  );

  useEffect(() => {
    if (isMobile) {
      setMaxDescriptionLengh(80);
    }
  }, [isMobile]);

  return (
    <BigSlideContainer>
      <StyledFade />
      <Image
        src={slide.preview_image_url || ""}
        alt={slide.title || ""}
        objectFit="cover"
        objectPosition="right"
        fill
        draggable={false}
        style={{ zIndex: 2 }}
      />

      <StyledBodyContainer>
        <Container sx={{ mt: 15 }}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: 52,
              textTransform: "uppercase",
              "@media(max-width:480px)": { fontSize: 38 },
            }}
          >
            {slide.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              {slide.season} сезон |{" "}
            </Typography>
            {Array.from({ length: slide.rating }, (_, index) => (
              <Image src={Ic_Star} alt={"Рейтинг"} key={`star - ${index}`} />
            ))}
          </Box>

          <Typography
            variant="subtitle1"
            sx={{
              color: "white",
              maxWidth: 420,
              mt: 1,
              fontWeight: 300,
              fontSize: 17,
            }}
          >
            {Number(slide?.description?.length) >= maxDescriptionLenght
              ? slide.description?.slice(0, maxDescriptionLenght) + "..."
              : slide.description}
          </Typography>
          <Link
            href={`/anime/${slide.anime_id}`}
            style={{ textDecoration: "none", marginTop: 20 }}
          >
            <Button
              sx={{
                background: "#8C53FD",
                height: 40,
                width: 160,
                mt: 2,
                "@media(max-width:480px)": { width: 140, height: 35 },
              }}
            >
              Смотреть
            </Button>
          </Link>
        </Container>
      </StyledBodyContainer>
    </BigSlideContainer>
  );
};
