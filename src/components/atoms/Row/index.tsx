import React, { ReactNode } from "react";
import { Container } from "./styles";

export type RowProps = {
  my?: number;
  mx?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  py?: number;
  px?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;

  width?: number;
  gap?: number;
  jc?: "center" | "space-between" | "space-around" | "flex-start" | "flex-end";
  fd?: "column" | "column-reverse" | "row" | "row-reverse";
  alignItems?: "center" | "flex-end" | "flex-start";

  children?: ReactNode;
};

export default function Row({ children, ...rest }: RowProps): JSX.Element {
  return <Container {...rest}>{children}</Container>;
}
