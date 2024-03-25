import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// screens
import Onboarding1 from "./src/component/onboarding1";
import Onboarding2 from "./src/component/onboarding2";
import Login from "./src/screens/login";
import SignUp from "./src/screens/signUp";
import Home from "./src/screens/home";
import { SafeAreaView } from "react-native-safe-area-context";
import Home1 from "./src/screens/home1";
import Home2 from "./src/component/home2";
import Voicenoterec from "./src/component/voicenoterec";
import NewNote from "./src/component/NewNote";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NewNote />

    // <NavigationContainer>
    //   <SafeAreaView style={styles.safeAreaView}>
    //     <Stack.Navigator screenOptions={{ headerShown: false }}>
    //       <Stack.Screen name="Onboarding1" component={Onboarding1} />
    //       <Stack.Screen name="Onboarding2" component={Onboarding2} />
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Signup" component={SignUp} />
    //       <Stack.Screen name="Home" component={Home} />
    //     </Stack.Navigator>
    //   </SafeAreaView>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
});
