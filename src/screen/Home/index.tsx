import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

import Header from "../../components/molecules/Header";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header />

      <Content></Content>
    </Container>
  );
}
