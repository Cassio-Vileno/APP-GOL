import React from "react";
import { theme } from "../../../theme/default.theme";
import { TextInputProps } from "react-native";
import { Icon } from "../../atoms/Icon";
import { Container, SearchIcon, SearchInput } from "./styles";

type SearchBarProps = TextInputProps & {
  onChageText: (e: any) => void;
  value?: string;
};

export default function SearchBar({
  onChageText,
  value,
  ...rest
}: SearchBarProps) {
  return (
    <Container>
      <SearchInput
        placeholder="Buscar"
        onChangeText={onChageText}
        placeholderTextColor={theme.input.neutralGray}
        value={value}
        {...rest}
      />
      <SearchIcon>
        <Icon name="search" size={28} color={theme.icon.secondary} />
      </SearchIcon>
    </Container>
  );
}
