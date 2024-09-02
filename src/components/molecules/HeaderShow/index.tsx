import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { theme } from "../../../theme/default.theme";
import { Icon } from "../../atoms/Icon";
import { Paragraph } from "../../atoms/Paragraph";
import Row from "../../atoms/Row";
import { ButtonBack, Container } from "./styles";

type HeaderShowProps = {
  title?: string;
  subtitle?: string;
};
export default function HeaderShow({
  title,
  subtitle,
}: HeaderShowProps): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Icon size={25} color="#FF5A00" name="chevron-left" />
      </ButtonBack>
      <Row alignItems="center">
        <Paragraph
          color="#FF5A00"
          size={17}
          textAlign="center"
          fontFamily="Poppins_600SemiBold"
        >
          {title}
        </Paragraph>
        {subtitle && (
          <Paragraph color={theme.color.gray200} size={13}>
            {subtitle}
          </Paragraph>
        )}
      </Row>
      <View style={{ width: 44 }} />
    </Container>
  );
}
