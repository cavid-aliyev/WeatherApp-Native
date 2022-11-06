import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Loading } from "./components";
import getLocation from "./utils/getLocation";

export default function App() {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getLocation();
    setLoading(false);
  }, [getLocation]);

  return isLoading ? <Loading /> : null;
}
