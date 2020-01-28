import React from "react";
import { StyleSheet, Text, View, Picker, Button } from "react-native";

const games = [
  { label: "Uno!", value: "uno" },
  { label: "Бэнг", value: "bang" }
];

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

const Home = props => {
  const [game, setGame] = React.useState(games[0].value);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выберите игру:</Text>
      <Picker
        selectedValue={game}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setGame(itemValue)}
      >
        {games.map(game => (
          <Picker.Item key={game.value} label={game.label} value={game.value} />
        ))}
      </Picker>
      <Button
        title="Начать"
        onPress={() => props.navigation.navigate("UnoSettings")}
      />
    </View>
  );
};

export default Home;
