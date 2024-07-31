import React, { useState } from "react";
import Row from "../../components/atoms/Row";
import { FlatList } from "react-native-gesture-handler";

import { View } from "react-native";
import CardPromotion from "../../components/molecules/CardPromotion";
import { Container } from "./styles";

export default function AllPromotionsList(): JSX.Element {
  const data = [
    {
      id: 1,
      title: "O RIOGaleão conecta você com o Brasil e o mundo!",
      type: "nacional",
      rules:
        "Garanta 10%OFF em rotas selecionadas com o cupoma RIOGIG10 para voar de AGO/24 a SET/24. Válido só para asa primeiras 500 transações. Consulte as regras.",
      imageURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbcsJqai1omZ45Cj4sYCADnbjmNOXIvYzu7g&s",
    },
    {
      id: 2,
      title: "NOVIDADE: voos diretos para Aruba, Cancún e San José",
      type: "internacional",
      rules:
        "Escolha qual dos novos destinos internacionais mais combina com você e aproveite 10%OFF aplicando o código CARIBE10. Válido para voos GOL de NOV/24 a JUN/25 (exceto feriados)",
      imageURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV5aFJ-ee0cKBDB3Tb66t6YfPqlE3skqzYg&s",
    },
  ];

  return (
    <Container>
      <FlatList
        data={data}
        ListFooterComponent={
          <View style={{ height: 140, backgroundColor: "#FFF", flex: 1 }} />
        }
        renderItem={({ item }) => (
          <CardPromotion
            rules={item.rules}
            onPress={() => console.log(item)}
            imageURI={item.imageURI}
            key={item.id}
            title={item.title}
          />
        )}
      />
    </Container>
  );
}
