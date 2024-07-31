import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
`;

export const Content = styled.SafeAreaView`
  background-color: ${theme.page.backgroundColor};
  padding-bottom: 40px;
`;

export const Line = styled.View`
 height: 10px;
`;

export const CategoryContainer = styled.View`
  background-color: #fff;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  width: 100%;
  margin-left: 20px;
`;

export const FilterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 17px;
  align-items: center;
`;

export const MessageContainer = styled.View`
  width: 100%;
  height: 77%;
  justify-content: center;
  align-items: center;
`

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 0 15px;
`