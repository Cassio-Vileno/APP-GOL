import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";
import { theme } from "../../../theme/default.theme";

export type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  width?: string;
  loading?: boolean;
  disabled?: boolean;
};

export default function ButtonOutlined({
  onPress,
  width,
  children,
  loading,
  disabled,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container
      testID="ButtonOutline"
      disabled={disabled || loading}
      onPress={onPress}
      width={width}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          testID="activeIndicator"
          color={theme.button.color.primary}
          size={25}
        />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  );
}
