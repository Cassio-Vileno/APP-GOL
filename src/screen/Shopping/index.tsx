import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

import HomeHeader from "../../components/molecules/Header";

export default function Home(): JSX.Element {
  return (
    <Container>
      <HomeHeader />

      <Content></Content>
    </Container>
  );
}
