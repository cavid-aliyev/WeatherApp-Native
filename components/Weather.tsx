import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IWeather {
  temp: number;
  condition?: string;
}

const Weather: React.FC<IWeather> = ({ temp, condition }) => {
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
