import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Container = styled.View`
  width: ${theme.input.width};
`;
export const Input = styled.TextInput<any>`
  width: ${theme.input.width};
  height: ${RFValue(49)}px;
  padding: 10px 18px;
  background-color: ${theme.input.backgroundColor};
  border-radius: ${theme.input.borderRadius}px;
  border-style: solid;
  border-width: 1px;
  font-family: Poppins_400Regular;
  font-size: ${RFValue(theme.input.size)}px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
`;

export const Error = styled.Text`
  color: ${theme.input.errorColor};
`;
