import React, { useState } from "react";
import {
  ButtonShowOrHide,
  Container,
  Content,
  Error,
  PasswordInput,
  ShowOrHideText,
} from "./styles";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../Paragraph";
import { Icon } from "../Icon";

export type InputPasswordProps = TextInputProps & {
  error?: any;
  title?: string;
  onChangeText: () => void;
};

export default function InputPassword({
  error,
  onChangeText,
  title,
  ...rest
}: InputPasswordProps): JSX.Element {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <Container>
      {/* {title && (
        <Paragraph size={20} color={theme.input.placeholderColor}>
          {title}
        </Paragraph>
      )} */}
      <Content error={error}>
        <PasswordInput
          placeholderTextColor={theme.input.neutralGray}
          secureTextEntry={showPassword}
          selectionColor={theme.input.placeholderColor}
          cursorColor={theme.input.placeholderColor}
          onChangeText={onChangeText}
          {...rest}
        />
        <ButtonShowOrHide onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Icon size={23} color="#9D9FA0" name="eye-off" />
          ) : (
            <Icon size={23} color="#9D9FA0" name="eye" />
          )}
        </ButtonShowOrHide>
      </Content>
      <Error>{error?.message}</Error>
    </Container>
  );
}
