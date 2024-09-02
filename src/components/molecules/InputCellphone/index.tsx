import React from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { cellphoneMask } from "../../../utils/mask";
import { Container, Error, Input } from "./styles";

interface FormInputCellphoneProps extends TextInputProps {
  error?: any;
  onChangeText: (text: string) => void;
}

export default function InputCellphone({
  error,
  onChangeText,
  ...rest
}: FormInputCellphoneProps): JSX.Element {
  return (
    <Container>
      {/* <Paragraph size={15} color={theme.input.placeholderColor}>
        Seu celular
      </Paragraph> */}
      <Input
        maxLength={15}
        onChangeText={(value: any) => onChangeText(cellphoneMask(value))}
        keyboardType="numeric"
        placeholderTextColor={theme.input.neutralGray}
        selectionColor={theme.input.placeholderColor}
        cursorColor={theme.input.placeholderColor}
        error={error}
        {...rest}
      />
      <Error>{error?.message}</Error>
    </Container>
  );
}
