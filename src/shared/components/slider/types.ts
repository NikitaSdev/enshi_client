import { ReactNode } from "react";

export interface SliderProps {
  sliders: ReactNode[];
  isLoading: boolean;
  centeredControls?: boolean;
  breakpoints?: { [key: number]: { slidesPerView: number } };
}
