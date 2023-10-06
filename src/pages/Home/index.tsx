import { Button } from "../../components/Button";
import { ListTasks } from "../../components/ListTasks";
import { Navigator } from "../../components/Navigator";
import * as S from "./styles";

export const Home = () => {
  return (
    <S.Container>
      <Navigator />
      <S.Content>
        <Button label="Criar rotina" />
        <S.ButtonsGroup>
          <Button label="Tarefas" /> <Button label="Eventos" />
        </S.ButtonsGroup>
        <ListTasks />
      </S.Content>
    </S.Container>
  );
};
