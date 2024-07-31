import styled from 'styled-components/native';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';
import { Paragraph } from '../../atoms/Paragraph';

interface ButtonOutlinedProps {
  width?: string;
  color?: string;
}

export const Container = styled.TouchableOpacity<ButtonOutlinedProps>`
  width: ${props => props.width || theme.button.width};
  border: 2px solid ${theme.button.borderColor};
  height: 45px;
  border-radius: ${theme.button.borderRadius}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled(Paragraph) <{ color?: string }>`
  color: ${theme.button.color.primary};
  font-weight: bold;
  font-family: "Poppins_500Medium";
  font-size: ${RFValue(theme.button.textSize)}px;
`;
