import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Fab from "./Fab";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nameText: {
    fontSize: 20
  }
});

const Player = ({ name, onRemovePlayer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Fab
        onPress={onRemovePlayer}
        icon={require("../assets/images/remove_icon.png")}
      />
    </View>
  );
};

export default Player;
