import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { View } from "react-native";
import CardPromotion from "../../components/molecules/CardPromotion";
import { Container } from "./styles";

export default function NationalPromotiosList(): JSX.Element {
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
  ];

  return (
    <Container>
      <FlatList
        data={data}
        ListFooterComponent={
          <View style={{ height: 140, backgroundColor: "#FFF" }} />
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
