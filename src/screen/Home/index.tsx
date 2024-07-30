import React, { useEffect, useState } from "react";
import {
  BannerLead,
  Container,
  ContainerIcons,
  Content,
  ImgBanner,
} from "./styles";

import Header from "../../components/molecules/Header";
import ItemButtonHome from "../../components/molecules/ItemButtonHome";
import { useNavigation } from "@react-navigation/native";
import { iconHome } from "../../utils/icons";
import images from "../../utils/images";
import { Paragraph } from "../../components/atoms/Paragraph";
import Row from "../../components/atoms/Row";
import { theme } from "../../theme/default.theme";
import ButtonPrimary from "../../components/atoms/ButtonPrimary";

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
        <BannerLead>
          <ImgBanner resizeMode="contain" source={images.planeFlying} />
          <Row>
            <Paragraph size={15} fontFamily="Poppins_600SemiBold">
              Ofertas especiais para você!
            </Paragraph>
            <Paragraph color={theme.color.NeutralGra}>
              Escolha seu destino preferido e gatanta já sua viagem.
            </Paragraph>
          </Row>
          <Row mt={15}>
            <ButtonPrimary onPress={() => navigation.navigate("COMPRAR")}>
              Comprar passagem
            </ButtonPrimary>
          </Row>
        </BannerLead>
      </Content>
    </Container>
  );
}
