import React from "react";
import Home from "./src/pages/Home";
import { StatusBar, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content"></StatusBar>
      <Home></Home>
    </>
  );
}
