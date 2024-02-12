"use client";
import { IAnimeSlider } from "@/shared/types/slider.types";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { BigSlide } from "./lib/big-slide";
import { SmallSliderContainer, StyledContainer } from "./styles";
import { Slider } from "@/shared/components/slider";
import { useMediaQuery } from "@mui/material";

export const HomeSlider: FC<{ sliders: IAnimeSlider[] }> = ({ sliders }) => {
  const [selectedSlide, setSelectedSlide] = useState<IAnimeSlider>(sliders[0]);
  const [isDataProceed, setIsDataProceed] = useState(false);
  useEffect(() => {
    if (!isDataProceed) {
      if (sliders && sliders.length > 0) {
        setIsDataProceed(true);
        setSelectedSlide(sliders[0]);
      }
    }
  }, [sliders]);
  const isMobile = useMediaQuery("(max-width: 420px)");
  const smallSlides = sliders.map((slide) => (
    <Image
      onClick={() => setSelectedSlide(slide)}
      key={`small-slide ${slide.id}`}
      src={slide.image_url || ""}
      alt={slide.title || ""}
      width={isMobile ? 140 : 196}
      height={isMobile ? 220 : 280}
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
          breakpoints={{ 0: { slidesPerView: 4 } }}
        />
      </SmallSliderContainer>
    </StyledContainer>
  );
};
