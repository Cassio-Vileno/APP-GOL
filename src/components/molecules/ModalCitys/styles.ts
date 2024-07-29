import styled from "styled-components/native";
import { theme } from "../../../theme/default.theme";

export const Container = styled.View``;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: ${theme.color.OrangeBlur};
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.View`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  background-color: white;
  border-radius: 20px;
  max-width: 600px;
`;

export const ContentModal = styled.View`
 flex: 1;
 padding: 10px 20px;
`;

export const SearchBarContainer = styled.View`
 width: 100%;
 height: 56px;
`;

export const DownBar = styled.View`
 width: 80px;
 height: 8px;
 background-color: #C4C4C4;
 border-radius: 20px;
`;

export const DownBarContainer = styled.View`
 width: 100%;
 height: 25px;
 justify-content: center;
 align-items: center;
`;

export const LineSeparator = styled.View`
 width: 100%;
 height: 1px;
 background-color: #EEE;
`;


