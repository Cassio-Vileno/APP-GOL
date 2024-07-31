import React from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content } from "./styles";

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
