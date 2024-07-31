import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";

import CheckIn from "../screen/CheckIn";
import Login from "../screen/Login";
import Profile from "../screen/Profile";
import Promotion from "../screen/Promotion";
import SignUpAddress from "../screen/SignUpAddress";
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
      <AppStack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
