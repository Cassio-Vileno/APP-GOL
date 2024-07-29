import { theme } from '../../../theme/default.theme';
import styled from 'styled-components/native';
import { RFValue } from '../../../utils/normalize';
import { Icon } from '../../atoms/Icon';
import { FormFieldSelectProps } from '.';

export const Content = styled.View`  
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border-radius: ${theme.input.borderRadius}px;
`;

export const Container = styled.TouchableOpacity<FormFieldSelectProps>`
  width: ${props => props.width || theme.input.width};
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

export const ItemTravelers = styled.View`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
`;

export const ItemTravelersContent = styled.View`
  height: ${RFValue(50)}px;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;

export const IconTravelers = styled.Image`
  width: 52px;
  height: 52px;
`;

export const ButtonCounter = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: ${props => props.disabled ? theme.color.gray50 : theme.color.gray100};
  border-radius: 50px;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;