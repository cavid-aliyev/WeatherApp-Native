import * as Location from "expo-location";
import { Alert } from "react-native";

const getLocation = async () => {
  try {
    await Location.requestForegroundPermissionsAsync();

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();
    // API fetch
  } catch (error) {
    Alert.alert("Cant find location", "Saddd");
  }
};

export default getLocation;
