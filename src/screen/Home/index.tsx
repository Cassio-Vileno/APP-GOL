import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

import HomeHeader from "../../components/molecules/Header";

export default function Shopping(): JSX.Element {
  return (
    <Container>
      <HomeHeader />

      <Content></Content>
    </Container>
  );
}
