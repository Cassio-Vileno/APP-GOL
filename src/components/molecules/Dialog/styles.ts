import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.color.OrangeBlur};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View<{ height?: number }>`
  width: 90%;
  height: ${({ height }) => height || 330}px;
  position: relative;
  padding: 20px 25px;
  background-color: white;
  border-radius: 20px;
  max-width: 600px;
`;

export const Content = styled.View`
  width: ${theme.button.width};
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-weight: 400;
  font-size: ${RFValue(13)}px;
  color: #454a50;
  text-align: center;
  margin: 20px 0;
`;

export const Close = styled.TouchableOpacity`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 5px;
  right: 0px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  width: 90%;
  height: 45px;
  margin-bottom: 10px;
  background-color: transparent;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const Input = styled.TextInput<any>`
  width: 100%;
  height: 45px;
  padding: 10px;
  background-color: #e5e5e5;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.error ? 'red' : 'white')};
`;
