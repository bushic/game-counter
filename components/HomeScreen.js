import React from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";
import { games } from "../util/data.js";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    color: "#888"
  },
  picker: {
    height: 50,
    width: "50%"
  }
});

const HomeScreen = props => {
  const [game, setGame] = React.useState(games[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выберите игру:</Text>
      <Picker
        selectedValue={game}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setGame(itemValue)}
      >
        {games.map(game => (
          <Picker.Item key={game.value} label={game.label} value={game} />
        ))}
      </Picker>
      <Button
        title="Начать"
        onPress={() =>
          props.navigation.navigate("Settings", {
            game: game
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
