import { theme } from '../../theme/default.theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
  padding: 20px 0;
`;

export const Content = styled.ScrollView`
  background-color: ${theme.page.backgroundColor};
  padding-bottom: 40px;
`;

export const ContainerForm = styled.View`
  width: 100%;
  padding: 0 12px;
  gap: 10px;
`;

export const ButtonCheckIn = styled.TouchableOpacity`
  width: 100%;
  justify-content: space-between;
`;