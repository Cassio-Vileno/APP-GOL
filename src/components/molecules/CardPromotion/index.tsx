import React from "react";
import { theme } from "../../../theme/default.theme";
import { Paragraph } from "../../atoms/Paragraph";
import Row from "../../atoms/Row";
import { Container, Content } from "./styles";

type CardBlogProps = {
  title: string;
  rules: string;
  imageURI: string;
  onPress: () => void;
};

export default function CardPromotion({
  title,
  onPress,
  imageURI,
  rules,
  ...rest
}: CardBlogProps): JSX.Element {
  return (
    <Container activeOpacity={0.7} onPress={onPress}>
      <Content
        resizeMode="contain"
        source={{
          uri: imageURI,
        }}
      ></Content>
      <Row ml={15} mr={15}>
        <Paragraph
          color={theme.color.black}
          size={13}
          fontFamily="Poppins_700Bold"
        >
          {title}
        </Paragraph>
        <Paragraph size={11} color={theme.color.NeutralGra}>
          {rules}
        </Paragraph>
      </Row>
    </Container>
  );
}
