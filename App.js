import React from "react";
import HomeScreen from "./components/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SettingsScreen from "./components/SettingsScreen";
import AboutScreen from "./components/AboutScreen";

const App = () => {
  return <AppContainer />;
};

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    About: AboutScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default App;
