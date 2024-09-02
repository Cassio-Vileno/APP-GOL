import React from "react";

import {
  Buttonfilter,
  Container,
  ContainerFilter,
  Content,
  ContentInfoCompany,
} from "./styles";

import { Icon } from "../../components/atoms/Icon";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import HeaderShow from "../../components/molecules/HeaderShow";
import ItemListVoo from "../../components/molecules/ItemListVoo";
import { theme } from "../../theme/default.theme";
import { TERMS_OF_VOO } from "../../utils/constants";

export default function ListOfPassages(): JSX.Element {
  return (
    <Container>
      <Row ml={15} mr={15}>
        <HeaderShow title="Voo de ida e volta" subtitle="VCP - BSB" />
      </Row>
      <Content showsVerticalScrollIndicator={false}>
        <Paragraph color={theme.color.gray300} size={20}>
          Selecione sua ida para Brasília
        </Paragraph>
        <ContainerFilter>
          <Paragraph size={13} color={theme.color.NeutralGra}>
            1 voos encontrados
          </Paragraph>
          <Buttonfilter onPress={() => console.log({})}>
            <Icon color={theme.color.Orange100} name="sliders" />
          </Buttonfilter>
        </ContainerFilter>
        <Row mt={15}>
          <ItemListVoo
            arrival_time="07:45"
            departure_time="06:05"
            destination="BSB"
            flight_code="G3 1737"
            origin="VCP"
            payment_condition="em até 5x sem juros"
            price="510,22"
          />
        </Row>
        <ContentInfoCompany>
          {TERMS_OF_VOO.map((item) => {
            return (
              <Row mt={15} gap={5}>
                <Paragraph size={13} fontFamily="Poppins_600SemiBold">
                  {item.title}
                </Paragraph>
                <Paragraph
                  color={theme.color.gray300}
                  fontFamily="Poppins_400Regular"
                  size={12}
                >
                  {item.content}
                </Paragraph>
              </Row>
            );
          })}
        </ContentInfoCompany>
      </Content>
    </Container>
  );
}
