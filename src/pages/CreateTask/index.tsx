import { useNavigate } from "react-router-dom";
import { Navigator } from "../../components/Navigator";
import * as S from "./styles";

import { TextField } from "@radix-ui/themes";

export const CreateTask = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Navigator title="Criar Tarefa" navigateBack={() => navigate("/tasks")} />
      <TextField.Root>
        <TextField.Input />
      </TextField.Root>
    </S.Container>
  );
};
