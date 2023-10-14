import { useNavigate } from "react-router-dom";
import { Navigator } from "../../components/Navigator";
import * as S from "./styles";
import { SelectCategory } from "../../components/SelectCategory";
import { Task } from "../../components/Task";
import { ListTasks } from "../../components/ListTasks";
import { LargeButton } from "../../components/LargeButton";

export const Tasks = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Navigator title="Tarefas" navigateBack={() => navigate("/")} />
      <SelectCategory />
      <ListTasks />
      <S.Footer>
        <LargeButton label="ADICIONAR" />
      </S.Footer>
    </S.Container>
  );
};
