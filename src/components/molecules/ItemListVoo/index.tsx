import React from "react";
import { theme } from "../../../theme/default.theme";
import { icons } from "../../../utils/icons";
import { Icon } from "../../atoms/Icon";
import { Paragraph } from "../../atoms/Paragraph";
import Row from "../../atoms/Row";
import { Container, IconLogo } from "./styles";

type TypesItemListVoo = {
  price: string;
  origin: string;
  destination: string;
  departure_time: string;
  arrival_time: string;
  flight_code: string;
  payment_condition: string;
};

export default function ItemListVoo({
  departure_time,
  arrival_time,
  destination,
  origin,
  price,
  flight_code,
}: TypesItemListVoo): JSX.Element {
  return (
    <Container>
      <Row>
        <Row fd="row" alignItems="center" gap={8}>
          <Row alignItems="center">
            <Paragraph color={theme.color.gray300} size={11}>
              {origin}
            </Paragraph>
            <Paragraph fontFamily="Poppins_600SemiBold">
              {departure_time}
            </Paragraph>
          </Row>
          <Icon name="arrow-right" />
          <Row alignItems="center">
            <Paragraph color={theme.color.gray300} size={11}>
              {destination}
            </Paragraph>
            <Paragraph fontFamily="Poppins_600SemiBold">
              {arrival_time}
            </Paragraph>
          </Row>
        </Row>
        <Row>
          <Paragraph size={11} color={theme.color.gray300}>
            1:40, direto
          </Paragraph>
          <Paragraph size={12}>Voo {flight_code}</Paragraph>
          <IconLogo resizeMode="contain" source={icons.iconLogoBlack} />
        </Row>
      </Row>
      <Row alignItems="flex-end">
        <Row fd="row" alignItems="flex-end" gap={5}>
          <Paragraph
            color={theme.color.Orange100}
            fontFamily="Poppins_400Regular"
            size={12}
          >
            a partir de
          </Paragraph>
          <Paragraph color={theme.color.Orange100} fontFamily="Poppins_700Bold">
            R${price}
          </Paragraph>
        </Row>
        <Paragraph color={theme.color.gray300} size={12}>
          em até 5x sem juros
        </Paragraph>
      </Row>
    </Container>
  );
}
