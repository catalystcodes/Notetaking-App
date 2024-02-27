import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding1 from "./src/component/onboarding1";

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
