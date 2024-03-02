import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import PersonalData from "../component/personalData";
import Collections from "../component/collections";
import ChangePassword from "../component/changePassword";

const AccountSetting = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Writon</Text>
      <View style={styles.avaterRapper}>
        <Image source={require("../../assets/images/avater.png")} />
      </View>
      <View style={styles.nameRapper}>
        <Text style={styles.avaterName}>Andrea Oladimeji</Text>
        <Text style={styles.avaterLocation}>Lagos, NG</Text>
        <PersonalData />
        <Collections />
        <ChangePassword />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 16,
    marginBottom: 41,
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
  },
});

export default AccountSetting;
