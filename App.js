import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
import RecordList from "./src/component/recordList";
import MainHome from "./src/screens/mainHome";
import Notification from "./src/screens/notification";
import AccountSetting from "./src/screens/accountSetting";

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NewNote />
    // <RecordList />

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#7D57F1",
          tabBarInactiveTintColor: "#BDBDBD",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="MainHome"
          component={MainHome}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="RecordList"
          component={RecordList}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="edit-3" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications-outline" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
  },
});
