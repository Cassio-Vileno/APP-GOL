import { theme } from './../../../theme/default.theme';
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CheckboxContainer = styled.View`
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-color: ${theme.color.NeutralGra};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 3px;
`;

export const CheckboxInner = styled.View <{ checked: boolean }>`
  width: 13px;
  height: 13px;
  border-radius: 2px;
  background-color: ${({ checked }) => (checked ? theme.color.Orange100 : "transparent")};
`;

