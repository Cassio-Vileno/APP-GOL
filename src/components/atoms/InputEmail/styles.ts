import styled from 'styled-components/native';
import { InputProps } from '.';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Container = styled.TextInput<InputProps>`
  width: ${theme.input.width};
  height: ${RFValue(49)}px;
  font-size: ${RFValue(13)}px;
  font-family: Poppins_400Regular;
  padding: 10px 18px;
  background-color: ${theme.input.backgroundColor};
  border-radius: ${theme.input.borderRadius}px;
  border-width: 1px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
  border-width: 1px;
`;

export const Error = styled.Text`
  width: ${theme.input.width};
  text-align: left;
  color: ${theme.input.errorColor};
`;
