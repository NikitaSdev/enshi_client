import { Input } from "@/shared/components/input";
import { Typography } from "@mui/material";
import { StyledContainer, StyledButton } from "./styles";

export const ChangeAccountInfo = () => {
  return (
    <StyledContainer>
      <Typography variant="subtitle1" sx={{ fontSize: 20 }} mt={2}>
        Логин
      </Typography>
      <Input placeholder="Старый пароль" style={{ marginTop: 10 }} />
      <Typography variant="subtitle1" sx={{ fontSize: 20 }} mt={2}>
        Почта
      </Typography>
      <Input style={{ marginTop: 10 }} placeholder="Новый пароль" />

      <StyledButton>Сохранить</StyledButton>
    </StyledContainer>
  );
};
