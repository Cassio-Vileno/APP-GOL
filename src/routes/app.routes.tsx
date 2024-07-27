import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screen/Home";

import TabRoutes from "./tab.routes";

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
