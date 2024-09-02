import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Container, TextButton } from "./styles";

export type ButtonGhostProps = TouchableOpacityProps & {
  onPress: () => void;
  underlined?: boolean;
  color?: string;
  width?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: number;
};

export function ButtonGhost({
  onPress,
  children,
  underlined,
  color,
  loading,
  disabled,
  size,
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
        <TextButton size={size} color={color} underlined={underlined}>
          {children}
        </TextButton>
      )}
    </Container>
  );
}
