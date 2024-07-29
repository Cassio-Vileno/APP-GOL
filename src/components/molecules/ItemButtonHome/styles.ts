import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';
import { Paragraph } from '../../atoms/Paragraph';

interface ButtonOutlinedProps {
  color?: string;
}

export const Container = styled.TouchableOpacity<ButtonOutlinedProps>`
  width: ${RFValue(90)}px;
  height:${RFValue(90)}px;
  background-color: #ededed;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const ButtonText = styled(Paragraph) <{ color?: string }>`
  color: ${theme.color.NeutralGra};
  font-weight: bold;
  font-size: ${RFValue(10)}px;
  text-align: center;
`;

export const IconImage = styled.Image`
  width: 35px;
  height: 35px;
`;