import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { weatherOptions } from "../types/weather";

interface IWeather {
  temp: number;
  condition?: string;
}

const weatherOpt: weatherOptions = {
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#005AA7", "#FFFDE4"],
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#00B4DB", "#0083B0"],
  },
};

const Weather: React.FC<IWeather> = ({ temp, condition }) => {
  return (
    <LinearGradient
      colors={weatherOpt["Rain"].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.weatherStatus}>
        <MaterialCommunityIcons
          name={condition != undefined ? weatherOpt["Rain"].iconName : null}
          size={96}
          color="white"
        />
        <Text style={styles.weatherTemp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.weatherStatus, ...styles.textContainer }}>
        <Text style={styles.title}>Rainy Weather</Text>
        <Text style={styles.subTitle}>Please wear only warm clothers</Text>
      </View>
    </LinearGradient>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherStatus: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  weatherTemp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subTitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
