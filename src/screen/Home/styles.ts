import { theme } from '../../theme/default.theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
`;

export const Content = styled.ScrollView`
  background-color: ${theme.page.backgroundColor};
  padding-bottom: 40px;
  padding: 20px 12px 0 12px;
`;

export const ContainerIcons = styled.View`
width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
`;