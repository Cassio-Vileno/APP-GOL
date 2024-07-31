import React from "react";
import { Container } from "./styles";

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export function Icon({ name, color, size, ...rest }: IconProps) {
  return (
    <Container name={name} size={size ? size : 22} color={color} {...rest} />
  );
}
