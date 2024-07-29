import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container, IconImage } from "./styles";
import { theme } from "../../../theme/default.theme";
import { iconHome } from "../../../utils/icons";

export type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  icon: any;
  title: string;
};

export default function ItemButtonHome({
  onPress,
  icon,
  title,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container onPress={onPress} {...rest}>
      <IconImage source={icon} />
      <ButtonText color={theme.color.NeutralGra}>{title}</ButtonText>
    </Container>
  );
}
