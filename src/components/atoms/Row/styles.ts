import styled from 'styled-components/native';
import { RowProps } from '.';

export const Container = styled.View<RowProps>`
  ${props => (props?.width ? `width: ${props?.width}%;` : '')}
  ${props =>
    props?.my
      ? `margin-top: ${props?.my}px; margin-bottom: ${props?.my}px; `
      : ''}
  ${props =>
    props?.mx
      ? `margin-left: ${props?.mx}px; margin-right: ${props?.mx}px; `
      : ''}
  ${props => (props?.mt ? `margin-top: ${props?.mt}px;` : '')}
  ${props => (props?.mb ? `margin-bottom: ${props?.mb}px;` : '')}
  ${props => (props?.ml ? `margin-left: ${props?.ml}px;` : '')}
  ${props => (props?.mr ? `margin-right: ${props?.mr}px;` : '')}
  ${props =>
    props?.py
      ? `padding-top: ${props?.py}px; padding-bottom: ${props?.py}px; `
      : ''}
  ${props =>
    props?.px
      ? `padding-left: ${props?.px}px; padding-right: ${props?.px}px; `
      : ''}
  ${props => (props?.pt ? `padding-top: ${props?.pt}px;` : '')}
  ${props => (props?.pb ? `padding-bottom: ${props?.pb}px;` : '')}
  ${props => (props?.pl ? `padding-left: ${props?.pl}px;` : '')}
  ${props => (props?.pr ? `padding-right: ${props?.pr}px;` : '')}
  ${props => (props?.gap ? `gap: ${props?.gap}px;` : '')}

  flex-direction: ${props => props.fd || 'colun'};
  justify-content: ${props => props.jc || 'inherit'};
  align-items: ${props => props.alignItems || 'inherit'};
`;
