import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";
import { StyleSheet } from "react-native";
import DrawerContent from "../component/DrawerContent";

//Screens
import AccountSetting from "./accountSetting";
import Notification from "./notification";
import Security from "./security";
import Faq from "./faq";
import Theme from "../component/theme";

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: "100%" } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Account Settings" component={AccountSetting} />
      <Drawer.Screen name="Notifications" component={Notification} />
      <Drawer.Screen name="Security" component={Security} />
      <Drawer.Screen name="FAQ" component={Faq} />
      <Drawer.Screen name="Theme" component={Theme} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Home;
