import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { menuItems } from "../constantData";

import PersonalData from "../component/PersonalData";
import Collections from "../component/Collections";
import ChangePassword from "../component/ChangePassword";

const AccountSetting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Writon</Text>
      <View style={styles.avaterRapper}>
        <Image source={require("../../assets/images/avater.png")} />
      </View>
      <View style={styles.nameRapper}>
        <Text style={styles.avaterName}>Andrea Oladimeji</Text>
        <Text style={styles.avaterLocation}>Lagos, NG</Text>
      </View>
      <PersonalData />
      <View>
        <Collections style={styles.containStyle} />
      </View>
      <ChangePassword />
      <Text style={styles.signOutText}>Sign Out</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 65,
  },
  text: {
    marginTop: 16,
    marginBottom: 52,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  avaterRapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  nameRapper: {
    alignItems: "center",
  },
  avaterName: {
    fontSize: 24,
    fontWeight: "400",
  },
  avaterLocation: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 40,
    marginTop: 15,
  },
  containStyle: {
    backgroundColor: "red",
  },
  signOut: {
    textAlign: "center",
  },
  signOutText: {
    textAlign: "center",
    marginTop: 70,
    fontWeight: "700",
    fontSize: 16,
    color: "#7D57F1",
  },
  personalItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
    marginLeft: 20,
  },
});

export default AccountSetting;
