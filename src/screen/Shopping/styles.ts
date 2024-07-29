import { theme } from '../../theme/default.theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
`;

export const Content = styled.ScrollView`
  background-color: ${theme.page.backgroundColor};
  padding-bottom: 40px;
`;

export const ContainerForm = styled.View`
  width: 100%;
  padding: 0 12px;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;