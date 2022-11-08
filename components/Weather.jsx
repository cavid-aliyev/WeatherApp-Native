import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Weather = ({ temp }) => {
  return (
    <View style={styles.container}>
      <Text>Weatherrr {temp} C</Text>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
