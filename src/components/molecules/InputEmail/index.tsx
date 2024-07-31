import React from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Container, Error } from "./styles";
import { Paragraph } from "../Paragraph";

export type InputProps = TextInputProps & {
  error: any;
  onChangeText: () => void;
};

export default function InputEmail({
  error,
  onChangeText,
  ...rest
}: InputProps) {
  return (
    <>
      <Container
        error={error}
        placeholderTextColor={theme.input.neutralGray}
        selectionColor={theme.input.placeholderColor}
        cursorColor={theme.input.placeholderColor}
        keyboardType={"email-address"}
        onChangeText={onChangeText}
        autoCapitalize="none"
        {...rest}
      />
      <Error>{error?.message}</Error>
    </>
  );
}
