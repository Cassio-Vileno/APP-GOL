import React from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { ZipCode, Error, ZipcodeIcon } from "./styles";

export type InputProps = TextInputProps & {
  error: any;
  onChangeText: () => void;
  onBlur?: () => void;
  loading?: boolean;
};

export default function InputZipcode({
  error,
  onChangeText,
  onBlur,
  loading,
  ...rest
}: InputProps) {
  return (
    <>
      <ZipCode
        error={error}
        placeholderTextColor={theme.input.neutralGray}
        selectionColor={theme.input.placeholderColor}
        cursorColor={theme.input.placeholderColor}
        keyboardType={"numeric"}
        onBlur={onBlur}
        onChangeText={onChangeText}
        {...rest}
      />
      <Error>{error?.message}</Error>
    </>
  );
}
