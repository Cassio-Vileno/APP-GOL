import React, { useEffect, useState } from "react";
import { theme } from "../../theme/default.theme";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Paragraph } from "../../components/atoms/Paragraph";
import { RFValue } from "../../utils/normalize";

import RoundTrip from "../../screen/RoundTrip";
import AnExcerpt from "../../screen/AnExcerpt";
import SeveralExcerpts from "../../screen/SeveralExcerpts";

const Tab = createMaterialTopTabNavigator();

export type TabAnimatedViewProps = {
  tabOffsetValue: any;
  width: number;
};
export type TabActivitRoutesProps = {
  isVisible?: boolean;
};

export default function TabActivitRoutes({ isVisible }: TabActivitRoutesProps) {
  const [height, setHeight] = useState(60);
  const [focusTab, setFocusTab] = useState("ALL");

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
        name="IDAEVOLTA"
        component={RoundTrip}
        listeners={{
          focus: () => {
            setFocusTab("ALL");
          },
        }}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              IDA E VOLTA
            </Paragraph>
          ),
        }}
      />
      <Tab.Screen
        name="TRECHO"
        component={AnExcerpt}
        listeners={{
          focus: () => {
            setFocusTab("ALL");
          },
        }}
        options={{
          tabBarLabel: ({ color }) => (
            <Paragraph size={12} color={color} fontFamily="Poppins_600SemiBold">
              UM TRECHO
            </Paragraph>
          ),
        }}
      />
      <Tab.Screen
        name="VARIOSTRECHOS"
        component={SeveralExcerpts}
        listeners={{
          focus: () => {
            setFocusTab("ALL");
          },
        }}
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
