import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Fab from "./Fab";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fabContainer: {
    position: "absolute",
    bottom: 10,
    right: 5,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  fabIcon: {
    width: 20,
    height: 20
  }
});

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("game").label
    };
  };

  state = {
    players: []
  };

  handleAddPlayer = event => {};
  handlePlay = event => {};

  render() {
    const game = this.props.navigation.getParam("game");

    return (
      <View style={styles.container}>
        <Text>Игроки</Text>
        <View style={styles.fabContainer}>
          <Fab
            onPress={this.handleAddPlayer}
            icon={require("../assets/images/add_icon.png")}
          />
          <Fab
            onPress={this.handlePlay}
            icon={require("../assets/images/play_icon.png")}
          />
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
