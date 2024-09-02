import styled from "styled-components/native";
import { RFValue } from "../../../utils/normalize";
import { theme } from './../../../theme/default.theme';


export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
`;

export const IconLogo = styled.Image`
  height: ${RFValue(15)}px;
  width: ${RFValue(35)}px;
  margin: 10px 0;
`;