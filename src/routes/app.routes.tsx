import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screen/Home";

import TabRoutes from "./tab.routes";
import Login from "../screen/Login";
import Profile from "../screen/Profile";
import Promotion from "../screen/Promotion";
import CheckIn from "../screen/CheckIn";

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
      <AppStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="LogIn"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Promotion"
        component={Promotion}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="CheckIn"
        component={CheckIn}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
