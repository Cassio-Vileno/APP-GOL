import React from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { birthDateMask } from "../../../utils/mask";
import { Container, Content, Error, Input } from "./styles";

interface FormInputBirthDateProps extends TextInputProps {
  error?: any;
  onChangeText: (text: string) => void;
}

export default function InputBirthDate({
  error,
  onChangeText,
  ...rest
}: FormInputBirthDateProps): JSX.Element {
  return (
    <Container>
      <Content error={error}>
        <Input
          maxLength={10}
          onChangeText={(value: any) => onChangeText(birthDateMask(value))}
          keyboardType="numeric"
          placeholderTextColor={theme.input.neutralGray}
          selectionColor={theme.input.placeholderColor}
          cursorColor={theme.input.placeholderColor}
          {...rest}
        />
      </Content>
      <Error>{error?.message}</Error>
    </Container>
  );
}
