import React from "react";
import { Paragraph } from "../../atoms/Paragraph";
import { Container, Content, ImageCity } from "./styles";

type CityItemProps = {
  name: string;
  state: string;
  iata: string;
  imageUri: string;
  onPress: () => void;
  isSelected?: boolean;
};

export default function CityItem({
  name,
  iata,
  state,
  imageUri,
  isSelected,
  onPress,
  ...res
}: CityItemProps): JSX.Element {
  return (
    <Container {...res} activeOpacity={0.7} onPress={onPress}>
      <ImageCity source={{ uri: imageUri }} />
      <Content>
        <Paragraph
          color={isSelected ? "#DCAE0D" : "#303030"}
          size={14}
          fontFamily="Poppins_600SemiBold"
        >
          {name} - {iata}
        </Paragraph>
        <Paragraph
          color={isSelected ? "#DCAE0D" : "#8C8C8C"}
          size={14}
          fontFamily="Poppins_400Regular"
        >
          {state}
        </Paragraph>
      </Content>
    </Container>
  );
}
