import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';
import { RFValue } from '../../utils/normalize';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
  padding: 20px 0;
`;

export const Content = styled.ScrollView`
  background-color: ${theme.page.backgroundColor};
  padding: 25px 20px 40px;
`;

export const Buttonfilter = styled.TouchableOpacity`
  height: ${RFValue(30)}px;
  width: ${RFValue(30)}px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
`;

export const ContainerFilter = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 8px;
  border-bottom-width: 2px;
  border-color: ${theme.color.gray200};
  padding: 0 0 8px 0;
`;

export const ContentInfoCompany = styled.View`
  width: 100%;
  border-top-width: 1px;
  border-color: ${theme.color.gray200};
  margin-top: 20px;
  padding-top: 10px;
`;