import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Fab from "./Fab";
import Player from "./Player";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  fabContainer: {
    position: "absolute",
    bottom: 20,
    right: 15,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  playerContainer: {
    flexDirection: "column",
    justifyContent: "space-between"
  },
  caption: {
    fontSize: 24,
    marginBottom: 24
  }
});

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("game").label
    };
  };

  state = {
    players: [
      {
        id: 1,
        name: "Дима"
      },
      {
        id: 2,
        name: "Лера"
      }
    ]
  };

  handleAddPlayer = event => {};
  handlePlay = event => {};

  render() {
    const { players } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.caption}>Игроки</Text>
        <View style={styles.playerContainer}>
          {players.map(player => (
            <Player key={player.id} name={player.name} />
          ))}
        </View>
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
