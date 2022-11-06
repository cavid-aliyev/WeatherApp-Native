import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.t1}></View>
      <View style={styles.t2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  t1: {
    flex: 1,
    backgroundColor: "red",
  },
  t2: {
    flex: 1,
    backgroundColor: "green",
  },
});
