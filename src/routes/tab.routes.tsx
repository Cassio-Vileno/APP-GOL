import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, Keyboard } from "react-native";
import { theme } from "../theme/default.theme";
import { AnimatedTabBarBar, ImgMenu } from "./styles";
import { RFValue } from "../utils/normalize";
import { menu } from "../utils/icons";
import Shopping from "../screen/Shopping";
import Home from "../screen/Home";

const Tab = createBottomTabNavigator();

export type TabAnimatedViewProps = {
  tabOffsetValue: any;
  width: number;
};

export default function TabRoutes() {
  const [tabOffsetValue, setTabOffsetValue] = useState<number>(0);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    console.log(isKeyboardVisible);
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  function getWidth() {
    let width = Dimensions.get("window").width;
    return width / 2;
  }

  return (
    <>
      <Tab.Navigator
        backBehavior="history"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.tabNavigator.activeTintColor,
          tabBarInactiveTintColor: theme.tabNavigator.inactiveTintColor,

          tabBarStyle: {
            backgroundColor: theme.tabNavigator.backgroundColor,
            borderTopWidth: 1,
            display: isKeyboardVisible ? "none" : "flex",
            height: RFValue(55),
            paddingBottom: RFValue(10),
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="HOME"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <ImgMenu
                  width={RFValue(size)}
                  height={RFValue(size)}
                  source={color === "#FF5E00" ? menu.homeFocus : menu.homeBlur}
                />
              );
            },
          }}
          listeners={({}) => ({
            focus: () => {
              setTabOffsetValue(0);
            },
          })}
        />
        <Tab.Screen
          name="COMPRAR"
          component={Shopping}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <ImgMenu
                  width={RFValue(size)}
                  height={RFValue(size)}
                  source={color === "#FF5E00" ? menu.bagFocus : menu.bagBlur}
                />
              );
            },
          }}
          listeners={({}) => ({
            focus: () => {
              setTabOffsetValue(getWidth() * 1);
            },
          })}
        />
      </Tab.Navigator>
      {!isKeyboardVisible && (
        <AnimatedTabBarBar
          tabOffsetValue={tabOffsetValue}
          width={getWidth() - 33}
        />
      )}
    </>
  );
}
