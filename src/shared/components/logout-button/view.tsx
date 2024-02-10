import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Ic_Exit from "@/assets/icons/ic_exit.svg";
import { redirect } from "next/navigation";
import { StyledContainer } from "@/shared/components/logout-button/styles";

export const LogoutButton = () => {
  const handleLogout = () => {
    signOut();
    redirect("/");
  };
  return (
    <Button onClick={handleLogout}>
      <StyledContainer>
        <Image src={Ic_Exit} alt={"Выйти"} />
      </StyledContainer>
    </Button>
  );
};