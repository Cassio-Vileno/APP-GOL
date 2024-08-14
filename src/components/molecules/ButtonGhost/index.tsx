import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { Container, TextButton } from "./styles";
import { theme } from "../../../theme/default.theme";

export type ButtonGhostProps = TouchableOpacityProps & {
  onPress: () => void;
  underlined?: boolean;
  color?: string;
  width?: string;
  loading?: boolean;
  disabled?: boolean;
};

export function ButtonGhost({
  onPress,
  children,
  underlined,
  color,
  loading,
  disabled,
  ...rest
}: ButtonGhostProps): JSX.Element {
  return (
    <Container onPress={onPress} disabled={disabled || loading} {...rest}>
      {loading ? (
        <ActivityIndicator
          testID="activeIndicator"
          color={theme.button.color.primary}
          size={25}
        />
      ) : (
        <TextButton color={color} underlined={underlined}>
          {children}
        </TextButton>
      )}
    </Container>
  );
}
