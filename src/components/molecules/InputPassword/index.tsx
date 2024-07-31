import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Icon } from "../../atoms/Icon";
import {
  ButtonShowOrHide,
  Container,
  Content,
  Error,
  PasswordInput,
} from "./styles";

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
