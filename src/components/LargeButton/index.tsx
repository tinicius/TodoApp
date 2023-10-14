import { ButtonHTMLAttributes, FC } from "react";
import * as S from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const LargeButton: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <S.Container>
      <S.Button {...props}>{label}</S.Button>
    </S.Container>
  );
};
