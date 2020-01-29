import React from "react";
import Home from "./components/Home";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Settings from "./components/Settings";

const App = () => {
  return <AppContainer />;
};

const RootStack = createStackNavigator(
  {
    Home: Home,
    Settings: Settings
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default App;
