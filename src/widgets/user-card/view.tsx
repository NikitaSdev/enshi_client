"use client";
import { FC } from "react";
import { UserCardProps } from "./types";
import { Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { UserStatus } from "@/shared/components/user-status";
import { LogoutButton } from "@/shared/components/logout-button";
import { Settings } from "@/shared/components/settings-button";
import {
  MobileStyledContainer,
  StyledContainer,
  StyledGrid,
  UserLogin,
} from "@/widgets/user-card/styles";

export const UserCard: FC<UserCardProps> = ({ user }) => {
  const isMobile = useMediaQuery("(max-width: 1600px)");
  const isMobileSmall = useMediaQuery("(max-width: 750px)");
  return isMobile ? (
    <MobileStyledContainer>
      <Image
        src={user.avatar_url}
        alt={user.login}
        width={140}
        height={140}
        style={{ borderRadius: "1rem" }}
      />
      <Grid style={{ margin: "1rem" }}>
        <UserLogin>{user.login}</UserLogin>
        <UserStatus user_id={user.id} />
      </Grid>
      {isMobileSmall ? (
        <StyledGrid style={{ flexDirection: "column" }}>
          <Grid style={{ marginTop: "0.2rem" }}>
            <Settings />
          </Grid>
          <Grid style={{ marginTop: "0.2rem" }}>
            <LogoutButton />
          </Grid>
        </StyledGrid>
      ) : (
        <StyledGrid>
          {" "}
          <Grid>
            <Settings />
          </Grid>
          <Grid>
            <LogoutButton />
          </Grid>
        </StyledGrid>
      )}
    </MobileStyledContainer>
  ) : (
    <StyledContainer>
      <Image
        src={user.avatar_url}
        alt={user.login}
        width={140}
        height={140}
        style={{ borderRadius: "1rem" }}
      />
      <UserLogin>{user.login}</UserLogin> <UserStatus user_id={user.id} />
      <StyledGrid>
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
