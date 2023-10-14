import "./styles.css";
import * as S from "./styles"
import { CiMenuKebab } from "react-icons/ci";

import { DropdownMenu } from "@radix-ui/themes";

export const SelectCategory = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <S.Button>
          Selecionar Categoria
        </S.Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="center">
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
