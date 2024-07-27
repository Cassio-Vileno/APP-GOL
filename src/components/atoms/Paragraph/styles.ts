import styled from 'styled-components/native';
import { ParagraphProps } from '.';
import { RFValue } from '../../../utils/normalize';
import { theme } from '../../../theme/default.theme';

export const Container = styled.Text<ParagraphProps>`
  width: ${theme.paragraph.width};
  font-family: ${props => props.fontFamily || 'Poppins_500Medium'};
  font-size: ${props => RFValue(props.size || theme.paragraph.size)}px;
  color: ${props => props.color || theme.paragraph.color.default};
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
`;
