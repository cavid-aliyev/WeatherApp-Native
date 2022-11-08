import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Loading, Weather } from "./components";

import * as Location from "expo-location";
import { Alert } from "react-native";

import axios from "axios";
const api_key = "2a3987cf39b7533f3a9fc83297f5da93";

export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [temp, setTemp] = React.useState("");

  const getWeather = async (lat, lon) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    );

    setTemp(data.main.temp);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // API fetch
      const { temp } = getWeather(latitude, longitude);
      setLoading(false);

      console.log(temp);
    } catch (error) {
      Alert.alert("Cant find location", "Saddd");
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  console.log(temp, isLoading);

  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />;
}
