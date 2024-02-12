"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import Ic_Settings from "@/assets/icons/ic_settings.svg";
import Link from "next/link";
import {
  StyledButton,
  StyledContainer,
} from "@/shared/components/settings-button/styles";

export const Settings = () => {
  return (
    <Link href={"/profile/settings"}>
      <StyledButton>
        <StyledContainer>
          <Image src={Ic_Settings} alt={"настройки"} />
        </StyledContainer>
      </StyledButton>
    </Link>
  );
};
