import React, { useEffect, useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Paragraph } from "../../components/atoms/Paragraph";
import { theme } from "../../theme/default.theme";
import { RFValue } from "../../utils/normalize";

import AllPromotionsList from "../../screen/AllPromotionsList";
import InternationalPromotionsList from "../../screen/InternationalPromotionsList";
import NationalPromotiosList from "../../screen/NationalPromotiosList";

const Tab = createMaterialTopTabNavigator();

export default function PromotionsTab() {
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
        name="ALL"
        component={AllPromotionsList}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              Todos
            </Paragraph>
          ),
        }}
      />
      <Tab.Screen
        name="NATIONAL"
        component={NationalPromotiosList}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              Nacional
            </Paragraph>
          ),
        }}
      />
      <Tab.Screen
        name="INTERNATIONAL"
        component={InternationalPromotionsList}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              Internacional
            </Paragraph>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
