import * as S from "./styles";
import { CiMenuKebab } from "react-icons/ci";

import { DropdownMenu } from "@radix-ui/themes";

export const Task = () => {
  return (
    <S.Container>
      <S.Text>Task</S.Text>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <S.IconButton>
            <CiMenuKebab color="white" size={20} />
          </S.IconButton>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" color="green">
          <DropdownMenu.Item color="green" >Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </S.Container>
  );
};
