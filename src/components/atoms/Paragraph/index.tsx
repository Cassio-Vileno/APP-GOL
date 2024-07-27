import React from "react";
import { TextProps } from "react-native";
import { Container } from "./styles";

export type ParagraphProps = TextProps & {
  size?: number;
  color?: string;
  textAlign?: string;
  fontFamily?:
    | "Poppins_300Light"
    | "Poppins_500Medium"
    | "Poppins_600SemiBold"
    | "Poppins_400Regular"
    | "Poppins_700Bold";
};

export function Paragraph({ children, ...rest }: ParagraphProps): JSX.Element {
  return <Container {...rest}>{children}</Container>;
}
