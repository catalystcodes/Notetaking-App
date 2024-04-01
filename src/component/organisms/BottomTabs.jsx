import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MainHome from "../../screens/mainHome";
import RecordList from "../recordList";
import Notification from "../../screens/notification";

const Tab = createBottomTabNavigator();

const AppBottomTabs = () => {
  return (
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
  );
};

export default AppBottomTabs;
