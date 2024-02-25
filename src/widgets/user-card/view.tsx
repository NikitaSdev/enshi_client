"use client";

import { FC } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { UserStatus } from "@/shared/components/user-status";
import { LogoutButton } from "@/shared/components/logout-button";
import { Settings } from "@/shared/components/settings-button";
import {
  MobileStyledContainer,
  StyledContainer,
  StyledGrid,
} from "@/widgets/user-card/styles";
import { useSession } from "next-auth/react";

export const UserCard: FC = () => {
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isMobile = useMediaQuery("(max-width: 750px)");
  const isSmallMobile = useMediaQuery("(max-width: 480px)");
  const { data } = useSession();
  const user: any = data?.user;
  const isColumnLayout = isMobile && !isSmallMobile;

  return (
    <StyledContainer>
      <Image
        src={user?.avatar_url || ""}
        alt={user?.login || ""}
        width={140}
        height={140}
        style={{ borderRadius: "1rem" }}
      />
      <Typography variant="h2" m={2} sx={{ fontHeight: 600 }}>
        {user?.login}
      </Typography>
      <UserStatus user_id={user?.id} />
      <StyledGrid
        style={{
          flexDirection: isColumnLayout ? "column" : "row",
        }}
      >
        <Grid>
          <Settings />
        </Grid>
        <Grid>
          <LogoutButton />
        </Grid>
      </StyledGrid>
    </StyledContainer>
  );
};
