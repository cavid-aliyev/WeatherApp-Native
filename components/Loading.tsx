import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Getting weather api...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",

    backgroundColor: "#FDF6AA",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30,
  },
});
