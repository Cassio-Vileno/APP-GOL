import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Paragraph } from "../../components/atoms/Paragraph";
import { theme } from "../../theme/default.theme";
import { RFValue } from "../../utils/normalize";

import AnExcerpt from "../../screen/AnExcerpt";
import RoundTrip from "../../screen/RoundTrip";
import SeveralExcerpts from "../../screen/SeveralExcerpts";

const Tab = createMaterialTopTabNavigator();

export default function TravelPurchaseTab() {
  const [height, setHeight] = useState(60);

  useEffect(() => {
    setHeight(RFValue(45));
  }, []);

  return (
    <Tab.Navigator
      backBehavior="history"
      style={{
        minHeight: "100%",
        zIndex: 1000,
      }}
      screenOptions={{
        tabBarActiveTintColor: theme.tabNavigator.activeTintColor,
        tabBarInactiveTintColor: theme.tabNavigator.inactiveTintColor,
        tabBarIndicatorStyle: {
          backgroundColor: theme.tabNavigator.activeTintColor,
          height: 3,
        },

        tabBarStyle: {
          backgroundColor: theme.tabNavigator.backgroundColor,
          borderBottomWidth: 3,
          borderColor: "#D9D9D9",
          height: height,
          paddingBottom: 10,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="ROUNDTRIP"
        component={RoundTrip}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              IDA E VOLTA
            </Paragraph>
          ),
        }}
      />
      <Tab.Screen
        name="EXCERPT"
        component={AnExcerpt}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              UM TRECHO
            </Paragraph>
          ),
        }}
      />
      <Tab.Screen
        name="VARIOUSEXCERPTS"
        component={SeveralExcerpts}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={10} color={color} fontFamily="Poppins_600SemiBold">
              VARIOS TRECHOS
            </Paragraph>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
