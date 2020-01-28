import React from "react";
import Home from "./components/Home";
import { createStackNavigator } from "react-navigation-stack";
import UnoSettings from "./components/UnoSettings";
import { createAppContainer } from "react-navigation";

const App = () => {
  return <AppContainer />;
};

const RootStack = createStackNavigator(
  {
    Home: Home,
    UnoSettings: UnoSettings
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default App;
