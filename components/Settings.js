import React from "react";
import { View, Text } from "react-native";
import UnoSettings from "./UnoSettings";

class Settings extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("game").label
    };
  };

  render() {
    const game = this.props.navigation.getParam("game");

    return (
      <View>
        <Text>Settings {game.label}</Text>
        {game.value == "uno" && <UnoSettings />}
      </View>
    );
  }
}

export default Settings;
