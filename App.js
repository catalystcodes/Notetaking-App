import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Onboarding1 from "./src/component/onboarding1";
import Onboarding2 from "./src/component/onboarding2";
import LoginIn from "./src/component/loginIn";
import SignUp from "./src/component/signUp";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/component/home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Login" component={LoginIn} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
