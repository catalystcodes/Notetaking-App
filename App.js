import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onboarding1 from "./src/component/onboarding1";
import Onboarding2 from "./src/component/onboarding2";
import LoginIn from "./src/component/loginIn";
import SignUp from "./src/component/signUp";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Onboarding1 /> */}
      {/* <Onboarding2 /> */}
      {/* <LoginIn /> */}
      <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
