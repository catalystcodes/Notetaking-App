import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppBottomTabs from "../component/organisms/BottomTabs";
import AccountSetting from "./accountSetting";
import Notification from "./notification";
import Security from "./security";
import Faq from "./faq";
import Theme from "../component/theme";
import DrawerContent from "../component/DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerScreens = () => {
  const { Navigator, Screen } = Drawer;
  return (
    <Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: "100%" } }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="bottom tabs" component={AppBottomTabs} />
      <Screen name="account settings" component={AccountSetting} />
      <Screen name="notifications" component={Notification} />
      <Screen name="security" component={Security} />
      <Screen name="faq" component={Faq} />
      <Screen name="theme" component={Theme} />
    </Navigator>
  );
};

export default DrawerScreens;
