import { FC } from "react";
import * as S from "./styles";

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <S.Container>
      <S.Button>{label}</S.Button>
    </S.Container>
  );
};
