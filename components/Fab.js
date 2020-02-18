import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { Image } from "react-native";

const styles = StyleSheet.create({
  fab: {
    margin: 5,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00CC9B",
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    width: 40,
    height: 40
  }
});

const Fab = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.fab}>
      <Image style={styles.fabIcon} source={props.icon} />
    </TouchableOpacity>
  );
};

export default Fab;
