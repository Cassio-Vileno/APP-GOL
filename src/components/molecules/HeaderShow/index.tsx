import React from "react";
import { Paragraph } from "../../atoms/Paragraph";
import { ButtonBack, Container } from "./styles";
import { Icon } from "../../atoms/Icon";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

type HeaderShowProps = {
  title?: string;
};
export default function HeaderShow({ title }: HeaderShowProps): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon size={25} color="#FF5A00" name="chevron-left" />
      </ButtonBack>
      <Paragraph
        color="#FF5A00"
        size={18}
        textAlign="center"
        fontFamily="Poppins_600SemiBold"
      >
        {title}
      </Paragraph>
      <View style={{ width: 44 }} />
    </Container>
  );
}
