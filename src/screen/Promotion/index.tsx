import React from "react";
import Row from "../../components/atoms/Row";
import { Container, Content, HeaderContainer } from "./styles";

import { StatusBar } from "expo-status-bar";
import HeaderShow from "../../components/molecules/HeaderShow";
import PromotionsTab from "../../routes/TopTabsRouts/PromotionsTabs.routes";

export default function Promotion(): JSX.Element {
  return (
    <Container>
      <StatusBar backgroundColor="#ffffff" translucent={false} />
      <Row ml={15} mr={15} mt={10}>
        <HeaderShow title="Ofertas" />
      </Row>
      <HeaderContainer></HeaderContainer>
      <Content>
        <PromotionsTab />
      </Content>
    </Container>
  );
}
