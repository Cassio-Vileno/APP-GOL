import React, { useState } from "react";
import { Container, Content, ImageCity } from "./styles";
import { Paragraph } from "../../atoms/Paragraph";

type CityItemProps = {
  name: string;
  state: string;
  imageUri: string;
  onPress: () => void;
  isSelected?: boolean;
};

export default function CityItem({
  name,
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
          {name}
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
