import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
  padding: 0 28px;
`;

export const Content = styled.ScrollView`
  width: ${theme.page.width};
  padding: 5px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 10%;
  bottom: 0px;
`;

export const ContentHeader = styled.View`
    padding-top: 10px;
`;

