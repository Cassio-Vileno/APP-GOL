import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Routes from "./src/routes";
import { AuthProvider } from "./src/context/auth.context";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return <></>;
  }
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </AuthProvider>
      </NavigationContainer>
      <StatusBar backgroundColor="#ffffff" translucent={false} />
    </>
  );
}
