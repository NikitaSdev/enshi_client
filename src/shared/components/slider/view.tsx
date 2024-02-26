"use client";

import { FC, useRef, useState } from "react";
import { SliderProps } from "./types";
import SwiperCore from "swiper";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import {
  StyledSwiperControlButton,
  SwiperContainer,
  StyledSwiper,
  StyledSwiperSlide,
} from "./styles";
import Image from "next/image";
import Ic_Chevron from "@/assets/icons/ic_chevron__sm.svg";
import { motion } from "framer-motion";

export const Slider: FC<SliderProps> = ({
  sliders,
  isLoading,
  centeredControls,
  breakpoints,
}) => {
  const swiperRef = useRef<SwiperCore>();
  const [swiperNavigationAllowed, setSwiperNavigationAllowed] = useState<any>({
    prevButtonDisabled: false,
    nextButtonDisabled: false,
  });

  const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const prevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <SwiperContainer>
      {!swiperNavigationAllowed.prevButtonDisabled && (
        <StyledSwiperControlButton
          left
          centered={centeredControls}
          onClick={prevSlide}
        >
          <span>
            <Image
              src={Ic_Chevron}
              alt={"Назад"}
              style={{ transform: "rotateZ(180deg)" }}
            />
          </span>
        </StyledSwiperControlButton>
      )}

      <StyledSwiper
        sm={breakpoints ? "true" : undefined}
        breakpoints={
          breakpoints
            ? breakpoints
            : {
                0: {
                  slidesPerView: 2.5,
                },
                850: {
                  slidesPerView: 4,
                },
                1050: {
                  slidesPerView: 5,
                },
              }
        }
        onBeforeInit={(swiper: SwiperCore | undefined) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
      >
        {sliders.map((item, index) => (
          <StyledSwiperSlide key={sliders.length + index}>
            {item}
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>

      {!swiperNavigationAllowed.nextButtonDisabled && (
        <StyledSwiperControlButton
          centered={centeredControls}
          left={false}
          onClick={nextSlide}
        >
          <span>
            <Image src={Ic_Chevron} alt={"Назад"} />
          </span>
        </StyledSwiperControlButton>
      )}
    </SwiperContainer>
  );
};
