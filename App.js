import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./src/navigation/CustomNavigationBar";

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <CustomNavigationBar />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
