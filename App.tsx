import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Loading, Weather } from "./components";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
const api_key = "2a3987cf39b7533f3a9fc83297f5da93";
import { weatherTypes } from "./types/weather";

const App: React.FC = () => {
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [temp, setTemp] = React.useState<number>(0);
  const [condition, setCondition] = React.useState<string>("");

  const getWeather = async (lat: number, lon: number) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get<weatherTypes>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    );
    const condition = "Clear";
    setLoading(false);
    setTemp(temp);
    setCondition(weather[0].main);
  };

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // API fetch
      getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Cant find location", "Saddd");
    }
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Weather temp={Math.round(temp)} condition={condition} />
  );
};

export default App;
