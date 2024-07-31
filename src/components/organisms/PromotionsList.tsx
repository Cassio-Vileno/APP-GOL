import React, { useState } from "react";
import Row from "../../components/atoms/Row";
import { FlatList } from "react-native-gesture-handler";

import { View } from "react-native";
import CardPromotion from "../../components/molecules/CardPromotion";
import { PromotionProps } from "../../types/promotions";

type PromotionsListProps = {
  data: PromotionProps[];
};

export default function PromotionsList({
  data,
}: PromotionsListProps): JSX.Element {
  return (
    <Row>
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
    </Row>
  );
}
