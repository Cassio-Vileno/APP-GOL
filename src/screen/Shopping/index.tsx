import React from "react";
import { Controller, useForm } from "react-hook-form";

import { Container, ContainerForm, Content } from "./styles";

import Header from "../../components/molecules/Header";
import Row from "../../components/atoms/Row";
import InputSelectCity from "../../components/molecules/InputSelectCity";
import InputCalendar from "../../components/molecules/InputCalendar";
import InputTravelers from "../../components/molecules/InputTravelers";
import TabActivitRoutes from "../../routes/TopTabsRouts/travelPurchaseTabs.routes";

export default function Shopping(): JSX.Element {
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <Header />
      <Content>
        <TabActivitRoutes />
      </Content>
    </Container>
  );
}
