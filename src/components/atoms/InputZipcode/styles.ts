import styled from 'styled-components/native';
import { InputProps } from '.';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const ZipCode = styled.TextInput<InputProps>`
  width: ${theme.input.width};
  height: ${RFValue(49)}px;
  padding: 10px 18px;
  background-color: ${theme.input.backgroundColor};
  border-radius: ${theme.input.borderRadius}px;
  border-width: 1px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
  border-width: 1px;
  font-size: ${RFValue(theme.input.size)}px;
  font-family: Poppins_400Regular;
`;

export const Error = styled.Text`
  width: ${theme.input.width};
  color: ${theme.input.errorColor};
  text-align: left;
`;

export const ZipcodeIcon = styled.TouchableOpacity`
  text-align: right;
`;

