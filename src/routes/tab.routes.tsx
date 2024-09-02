import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Dimensions, Keyboard } from "react-native";
import { useAuth } from "../hooks/useAuth";
import Home from "../screen/Home";
import Login from "../screen/Login";
import Profile from "../screen/Profile";
import Shopping from "../screen/Shopping";
import { theme } from "../theme/default.theme";
import { menu } from "../utils/icons";
import { RFValue } from "../utils/normalize";
import { AnimatedTabBarBar, ImgMenu } from "./styles";

const Tab = createBottomTabNavigator();

export type TabAnimatedViewProps = {
  tabOffsetValue: any;
  width: number;
};

export default function TabRoutes() {
  const { signed } = useAuth();
  const [tabOffsetValue, setTabOffsetValue] = useState<number>(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
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
    return width / 3;
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
        <Tab.Screen
          name="YOURACCOUNT"
          component={signed ? Profile : Login}
          options={{
            tabBarIcon: ({ size, color }) => {
              return (
                <ImgMenu
                  width={RFValue(size)}
                  height={RFValue(size)}
                  source={color === "#FF5E00" ? menu.userFocus : menu.userBlur}
                />
              );
            },
          }}
          listeners={({}) => ({
            focus: () => {
              setTabOffsetValue(getWidth() * 2);
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
