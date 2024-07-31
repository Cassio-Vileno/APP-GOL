import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, TextButton } from "./styles";

export type ButtonGhostProps = TouchableOpacityProps & {
  onPress: () => void;
  underlined?: boolean;
  color?: string;
  width?: string;
};

export function ButtonGhost({
  onPress,
  children,
  underlined,
  color,
  ...rest
}: ButtonGhostProps): JSX.Element {
  return (
    <Container onPress={onPress} {...rest}>
      <TextButton color={color} underlined={underlined}>
        {children}
      </TextButton>
    </Container>
  );
}
