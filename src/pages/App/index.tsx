import { FC, ReactNode } from "react";
import * as S from "./styles";

interface AppProps {
  children: ReactNode;
}

export const App: FC<AppProps> = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
