import React from "react";
import Home from "./src/pages/Home";
import { AppLoading } from "expo";
import { StatusBar, View } from "react-native";

import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
    Ubuntu_700Bold,
  });
  if (!fontsLoaded) {
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      <Home></Home>
    </>
  );
}
