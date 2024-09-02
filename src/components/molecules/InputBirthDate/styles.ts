import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Container = styled.View`
  width: ${theme.input.width};
`;
export const Content = styled.View<{ error: string }>`
  width: ${theme.input.width};
  height: ${RFValue(49)}px;
  padding-left: 18px;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
  flex-direction: row;
  justify-content: space-between;
  font-family: Poppins_400Regular;
  font-size: ${RFValue(theme.paragraph.size)}px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
  border-width: 1px;
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: ${RFValue(theme.input.size)}px;
`;

export const Error = styled.Text`
  color: ${theme.input.errorColor};
`;
