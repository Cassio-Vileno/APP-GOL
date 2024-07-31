import React from "react";

import { Container, Content } from "./styles";

import Header from "../../components/molecules/Header";
import TravelPurchaseTab from "../../routes/TopTabsRouts/travelPurchaseTabs.routes";

export default function Shopping(): JSX.Element {
  return (
    <Container>
      <Header />
      <Content>
        <TravelPurchaseTab />
      </Content>
    </Container>
  );
}
