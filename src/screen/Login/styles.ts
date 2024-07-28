import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';
import { RFValue } from '../../utils/normalize';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
  padding: 28px;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: ${theme.page.width};
  padding: 5px;
`;

export const Image = styled.Image`
  width:${RFValue(150)}px;
  height: ${RFValue(200)}px;
  margin: auto;
`;

export const ImageIcon = styled.Image`
  width: 23px;
  height: 23px;
`;

export const ConatinerButtonRegister = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ButtonLoginWidth = styled.View`
    width: 190px;
`;

export const ContainerSeparator = styled.View`
    width: 100%;
    margin: 10px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Line = styled.View`
    width: 48%;
    margin: 0 10px;
    height: 1px;
    background-color: #C7C9D9;
`;
