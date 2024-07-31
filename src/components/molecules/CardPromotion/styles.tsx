import styled from "styled-components/native";
import { theme } from "../../../theme/default.theme";
import { RFValue } from "../../../utils/normalize";

export const Container = styled.TouchableOpacity`
  width: ${theme.button.width};
  height: ${RFValue(300)}px;
  border-radius: 5px;
  background-color: ${theme.color.white};
`;

export const Content = styled.ImageBackground`
  width: ${theme.button.width};
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Textcontent = styled.View`
  width: ${RFValue(280)}px;
  flex-direction: column;
  padding-left: ${RFValue(32)}px;
  gap: 10px;
  margin-top: 10%;
`;
