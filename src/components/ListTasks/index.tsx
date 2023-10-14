import { FC } from "react";
import * as S from "./styles";
import { Task } from "../Task";

interface ListTasksProps {}

export const ListTasks: FC<ListTasksProps> = ({}) => {
  return (
    <S.Container>
      <Task />
      <Task /> <Task /> <Task />
    </S.Container>
  );
};
