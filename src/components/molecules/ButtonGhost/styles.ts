import styled from 'styled-components/native';
import { ButtonGhostProps } from '.';
import { theme } from '../../../theme/default.theme';
import { RFValue } from '../../../utils/normalize';
import { Paragraph } from '../../atoms/Paragraph';

export const Container = styled.TouchableOpacity<ButtonGhostProps>`
  width: ${props => props.width || theme.button.width};
`;

export const TextButton = styled(Paragraph) <any>`
  color: ${props => props.color || theme.button.color.default};
  ${({ underlined }) => underlined && 'text-decoration: underline;'}
  font-weight: bold;
  font-family: "Poppins_500Medium";
  text-align: center;
  font-size: ${RFValue(theme.button.textSize)}px;
`;
