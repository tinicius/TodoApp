import { useNavigate } from "react-router-dom";
import { Navigator } from "../../components/Navigator";
import * as S from "./styles";
import { SelectCategory } from "../../components/SelectCategory";
import { ListTasks } from "../../components/ListTasks";

export const Tasks = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Navigator title="Tarefas" navigateBack={() => navigate("/")} navigateToCreateTask={() => navigate("/createTask")} />
      <SelectCategory />
      <ListTasks />
      <S.Footer>
      </S.Footer>
    </S.Container>
  );
};
