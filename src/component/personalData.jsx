import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import CollectionIcon from "./icons/CollectionIcon";
import ArrowRight from "./icons/ArrowRight";
import PersonalDetails from "./icons/PersonalDetails";

const PersonalData = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <PersonalDetails />
        <Text style={styles.cardDetails}>Personal Data</Text>
        <ArrowRight />
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
