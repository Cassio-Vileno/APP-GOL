import styled from 'styled-components/native';
import { theme } from '../../theme/default.theme';
import { RFValue } from '../../utils/normalize';

export const Container = styled.View`
  background-color: ${theme.page.backgroundColor};
  flex: 1;
  padding: 0 3px;
`;

export const Content = styled.ScrollView`
  width: ${theme.page.width};
  margin-bottom: 10px;

  padding: 0 28px;
`;

export const ContaionerButton = styled.View`
  width: 100%;
  justify-content: space-around;
  bottom: 0px;
  flex-direction: row;
`;

export const ControlerSelect = styled.View`
margin-bottom: 20px;
`;


export const Image = styled.Image`
  width: 100px;
  height: ${RFValue(50)}px;
  margin: auto;
`;

export const ContainerTermButton = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ModalTerms = styled.Modal`
  flex: 1;
`;

export const OverlayTerms = styled.View`
  background-color: rgba(0, 0, 0, 0.7);
  flex: 1;
`;

export const ContainerTerms = styled.View`
  height: 90%;
  width: ${theme.page.width};
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 18px 25px;
`;

export const ContentScrollTerms = styled.ScrollView`
  margin: 12px 0;
  flex: 1;
`;

export const LineSeparation = styled.View`
  border-bottom-width: 1px;
  border-color: ${theme.color.gray300};
  margin-bottom: 20px;
`;