import React, { useEffect, useState } from "react";
import { Container, ContainerIcons, Content } from "./styles";

import Header from "../../components/molecules/Header";
import ItemButtonHome from "../../components/molecules/ItemButtonHome";
import { useNavigation } from "@react-navigation/native";
import { iconHome } from "../../utils/icons";

export default function Home(): JSX.Element {
  const navigation = useNavigation<any>();
  return (
    <Container>
      <Header />

      <Content>
        <ContainerIcons>
          <ItemButtonHome
            title="Check-in"
            icon={iconHome.checkIn}
            onPress={() => console.log("")}
            // onPress={() => navigation.navigate("")}
          />
          <ItemButtonHome
            title="Minhas viajens"
            icon={iconHome.airplane}
            onPress={() => console.log("")}
            // onPress={() => navigation.navigate("")}
          />
          <ItemButtonHome
            title="Consultar viagens"
            icon={iconHome.lupa}
            onPress={() => console.log("")}
            // onPress={() => navigation.navigate("")}
          />
          <ItemButtonHome
            title="Status de voo"
            icon={iconHome.clock}
            onPress={() => console.log("")}
            // onPress={() => navigation.navigate("")}
          />
          <ItemButtonHome
            title="Ofertas"
            icon={iconHome.oferta}
            onPress={() => console.log("")}
            // onPress={() => navigation.navigate("")}
          />
          <ItemButtonHome
            title="Comprar passagem"
            icon={iconHome.cash}
            onPress={() => navigation.navigate("COMPRAR")}
          />
        </ContainerIcons>
      </Content>
    </Container>
  );
}
