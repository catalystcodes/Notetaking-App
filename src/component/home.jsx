import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";

import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import AccountSetting from "./accountSetting";
import Notification from "./notification";
import Security from "./security";
import Faq from "./faq";
import Theme from "./theme";

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="account setting" component={AccountSetting} />
        <Drawer.Screen name="notification" component={Notification} />
        <Drawer.Screen name="security" component={Security} />
        <Drawer.Screen name="faq" component={Faq} />
        <Drawer.Screen name="theme" component={Theme} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Home;
