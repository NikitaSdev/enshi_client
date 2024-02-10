import { Input } from "@/shared/components/input";
import { Typography } from "@mui/material";
import { StyledButton, StyledContainer } from "./styles";

export const ChangePassword = () => {
  return (
    <StyledContainer>
      <Typography variant="subtitle1" sx={{ fontSize: 20 }} mt={1}>
        Сменить пароль
      </Typography>
      <Input placeholder="Старый пароль" style={{ marginTop: 10 }} />
      <Input placeholder="Новый пароль" style={{ marginTop: 10 }} />
      <Input placeholder="Повторите пароль" style={{ marginTop: 10 }} />
      <StyledButton>Сохранить</StyledButton>
    </StyledContainer>
  );
};
