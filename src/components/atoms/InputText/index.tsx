import React from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Container, Error } from "./styles";

export type InputProps = TextInputProps & {
  title?: string;
  error: any;
  onChangeText: () => void;
};

export default function InputText({
  error,
  onChangeText,
  title,
  ...rest
}: InputProps) {
  return (
    <>
      {/* {title && (
        <Paragraph size={20} color={theme.input.placeholderColor}>
          {title}
        </Paragraph>
      )} */}
      <Container
        error={error}
        placeholderTextColor={theme.input.neutralGray}
        selectionColor={theme.input.placeholderColor}
        cursorColor={theme.input.placeholderColor}
        keyboardType={"email-address"}
        onChangeText={onChangeText}
        {...rest}
      />
      <Error>{error?.message}</Error>
    </>
  );
}
