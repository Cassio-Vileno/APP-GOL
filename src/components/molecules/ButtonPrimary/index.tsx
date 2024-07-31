import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../Paragraph";
import { Container } from "./styles";

export type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  width?: string;
  textColor?: string;
  loading?: boolean;
  backgroundColor?: string;
  weight?: string;
  height?: string;
};

export default function ButtonPrimary({
  onPress,
  children,
  loading,
  backgroundColor,
  textColor,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container onPress={onPress} {...rest} backgroundColor={backgroundColor}>
      <Paragraph
        size={theme.button.textSize}
        fontFamily="Poppins_700Bold"
        color={textColor || theme.button.color.primary}
      >
        {!loading && children}
      </Paragraph>
      {loading ? (
        <ActivityIndicator size={22} color={theme.button.color.primary} />
      ) : null}
    </Container>
  );
}
