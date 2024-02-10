"use client";
import { IAnimeSlider } from "@/shared/types/slider.types";
import Image from "next/image";
import { FC, useState } from "react";
import { BigSlide } from "./lib/big-slide";
import { SmallSliderContainer, StyledContainer } from "./styles";
import { Slider } from "@/shared/components/slider";

export const HomeSlider: FC<{ sliders: IAnimeSlider[] }> = ({ sliders }) => {
  const [selectedSlide, setSelectedSlide] = useState<IAnimeSlider>(sliders[0]);

  const smallSlides = sliders.map((slide) => (
    <Image
      onClick={() => setSelectedSlide(slide)}
      key={`small-slide ${slide.id}`}
      src={slide.image_url || ""}
      alt={slide.title || ""}
      width={196}
      height={280}
      style={{ borderRadius: 30, cursor: "pointer" }}
    />
  ));

  return (
    <StyledContainer style={{ position: "relative" }}>
      {selectedSlide && <BigSlide slide={selectedSlide} />}
      <SmallSliderContainer>
        <Slider
          sliders={smallSlides}
          isLoading={false}
          breakpoints={{ 0: { slidesPerView: 3 } }}
        />
      </SmallSliderContainer>
    </StyledContainer>
  );
};
