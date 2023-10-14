import { Button } from "../../components/Button";
import { ListTasks } from "../../components/ListTasks";
import { Navigator } from "../../components/Navigator";
import { useHomeController } from "./controller";
import * as S from "./styles";

export const Home = () => {
  const { handleCreateRoutine, handleNavigateTasksPage } = useHomeController();

  return (
    <S.Container>
      <Navigator title="ToDoApp" />
      <S.Content>
        <Button label="Criar rotina" onClick={handleCreateRoutine} />
        <S.ButtonsGroup>
          <Button label="Tarefas" onClick={handleNavigateTasksPage} />
          {/* <Button label="Eventos" /> */}
        </S.ButtonsGroup>
        
      </S.Content>
    </S.Container>
  );
};
