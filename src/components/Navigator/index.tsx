import { FC } from "react";
import * as S from "./styles";

import { FaArrowLeft } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";

interface NavigatorProps {
  title: string;
  navigateBack?: () => void;
  navigateToCreateTask?: () => void;
}

export const Navigator: FC<NavigatorProps> = ({
  title,
  navigateBack,
  navigateToCreateTask,
}) => {
  return (
    <S.Nav>
      <S.BackIconAndTitle>
        {navigateBack !== undefined && (
          <FaArrowLeft color="white" onClick={navigateBack} />
        )}
        <S.Text>{title}</S.Text>
      </S.BackIconAndTitle>
      <S.RightIcon>
        {navigateToCreateTask !== undefined && (
          <IoIosAdd color="white" size={30} onClick={navigateToCreateTask} />
        )}
      </S.RightIcon>
    </S.Nav>
  );
};
