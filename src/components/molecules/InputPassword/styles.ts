import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Container = styled.View`
  width: ${theme.input.width};
`;

export const Content = styled.View<{ error?: any }>`
  width: ${theme.input.width};
  height: ${RFValue(49)}px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
  border-width: 1px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
  border-width: 1px;
`;

export const ButtonShowOrHide = styled.TouchableOpacity`
  justify-content: center;
  padding: 8px 15px;
  min-width: 40px;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
`;

export const PasswordInput = styled.TextInput`
  flex: 1;
  height: 100%;
  border-width: 1px;
  padding: 10px 18px;
  font-family: Poppins_400Regular;
  border-radius: ${theme.input.borderRadius}px;
  border-width: 0px;
  font-size: ${RFValue(theme.input.size)}px;
`;

export const ShowOrHideText = styled.Text`
  color: ${theme.input.placeholderColor};
  font-size: ${RFValue(12)}px;
`;

export const Error = styled.Text`
  color: ${theme.input.errorColor};
`;
