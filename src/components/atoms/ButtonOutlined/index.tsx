import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonText, Container} from './styles';

export type ButtonProps = TouchableOpacityProps & {
  onPress: () => void;
  width?: string;
};

export default function ButtonOutlined({
  onPress,
  width,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <Container onPress={onPress} width={width} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
