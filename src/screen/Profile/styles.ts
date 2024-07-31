import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';
import { Paragraph } from '../../components/atoms/Paragraph';
import { Icon } from '../../components/atoms/Icon';
import { theme } from '../../theme/default.theme';
import { RFValue } from '../../utils/normalize';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex-direction: column;
  flex: 1px;
`;

export const Content = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex-direction: column;
  flex: 1px;
  align-items: center;
  padding: 12px 35px;
  width: 100%;
`;

export const Label = styled(Paragraph)`
  flex: 1;
  color: ${theme.color.black};
`;

export const IconItem = styled.Image`
  width: ${RFValue(25)}px;
`;

export const IconContainer = styled.View`
  margin-right: 10px;
`;

export const ContainerHeader = styled.View`
  padding-top: 10px ;
  justify-content: center;
  margin: 0 20px;
  margin-bottom: 20px;
`;

export const AccountItem = styled.TouchableOpacity`
  width: ${theme.button.width};
  height: 62px;
  flex-direction: row;
  padding: 0 0px;
  justify-content: space-between;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${theme.color.gray100};
`;

