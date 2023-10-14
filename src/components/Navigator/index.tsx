import { FC } from "react";
import * as S from "./styles";

import { FaArrowLeft } from "react-icons/fa6";

interface NavigatorProps {
  title: string;
  navigateBack?: () => void;
}

export const Navigator: FC<NavigatorProps> = ({ title, navigateBack }) => {
  return (
    <S.Nav>
      {navigateBack !== undefined && (
        <button onClick={navigateBack}>
          <FaArrowLeft />
        </button>
      )}

      <S.Text>{title}</S.Text>
    </S.Nav>
  );
};
