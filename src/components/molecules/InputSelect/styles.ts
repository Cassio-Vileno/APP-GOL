import styled from 'styled-components/native';
import { RFValue } from '../../../utils/normalize';
import { Icon } from '../../atoms/Icon';
import { theme } from './../../../theme/default.theme';

export const Content = styled.View`  
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border-radius: ${theme.input.borderRadius}px;
`;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color:${theme.color.OrangeBlur};
  justify-content: center;
  align-items: center;
`;


export const Container = styled.TouchableOpacity<{ error?: any }>`
  width: ${theme.input.width};
  height: ${RFValue(49)}px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px 0 20px;
  align-items: center;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
  border-width: 1px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default};
  border-width: 1px;
`;


export const FormFieldError = styled.Text`
  color: #eb4335;
  font-size: ${RFValue(12)}px;
`;

export const IconContainer = styled(Icon)`
  width: 52px;
  text-align: center;
`;

export const Error = styled.Text`
  width: ${theme.input.width};
  color: ${theme.input.errorColor};
  text-align: left;
`;
