import styled from "styled-components/native";
import { RFValue } from "../../../utils/normalize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(55)}px;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  flex-direction: row;
  gap: 10px;
`;
export const Content = styled.View`
  width: 100%;
  height: ${RFValue(55)}px;
`;

export const ImageCity = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: 10px;
  margin-top: 4px;
`;