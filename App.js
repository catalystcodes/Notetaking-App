import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// screens
import Login from "./src/screens/login";
import SignUp from "./src/screens/signUp";
import Home from "./src/screens/home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Home1 from "./src/screens/home1";
import Home2 from "./src/component/home2";
import Voicenoterec from "./src/component/voicenoterec";
import NewNote from "./src/component/NewNote";
import RecordList from "./src/component/recordList";
import MainHome from "./src/screens/mainHome";
import Notification from "./src/screens/notification";
import AccountSetting from "./src/screens/accountSetting";
import AppBottomTabs from "./src/component/organisms/BottomTabs";
import DrawerScreens from "./src/screens/DrawerScreens";
import AppOnboarding from "./src/component/organisms/AppOnboarding";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={"black"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding1" component={AppOnboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={SignUp} />
          <Stack.Screen name="writon screens" component={DrawerScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
});
