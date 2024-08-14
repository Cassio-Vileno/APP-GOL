import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color:#F6F7FA;
  padding: 2px 12px;
`;

export const SearchInput = styled.TextInput`
  height: 56px;
  justify-content: center;
  color: #9D9FA0;
  align-items: center;
  flex: 1;
`;

export const SearchIcon = styled.TouchableOpacity`
  text-align: right;
`;
