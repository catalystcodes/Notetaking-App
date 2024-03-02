import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PersonalDetails from "./icons/PersonalDetails";
import Arrowright from "./icons/arrowright";

const PersonalData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <PersonalDetails />
        <Text style={styles.cardDetails}>Personal Data</Text>
        <Arrowright />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 400,
    padding: 20,
    borderRadius: 10,
  },
  cardDetails: {
    marginRight: 125,
    fontSize: 16,
  },
});

export default PersonalData;
