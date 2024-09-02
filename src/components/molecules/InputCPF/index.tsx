import React from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { cpfMask } from "../../../utils/mask";
import { Container, Content, Error, Input } from "./styles";

interface FormInputCPFProps extends TextInputProps {
  error?: any;
  onChangeText: (text: string) => void;
}

export default function InputCPF({
  error,
  onChangeText,
  ...rest
}: FormInputCPFProps): JSX.Element {
  return (
    <Container>
      {/* <Paragraph size={20} color={theme.input.placeholderColor}>
        CPF
      </Paragraph> */}
      <Content error={error}>
        <Input
          maxLength={14}
          onChangeText={(value: any) => onChangeText(cpfMask(value))}
          keyboardType="numeric"
          placeholderTextColor={theme.input.neutralGray}
          selectionColor={theme.input.placeholderColor}
          cursorColor={theme.input.placeholderColor}
          placeholder="CPF"
          {...rest}
        />
      </Content>
      <Error>{error?.message}</Error>
    </Container>
  );
}
