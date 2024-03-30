import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = ({ title, details }) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}></View>
      <View style={styles.view3}>
        <Text style={styles.text1}>{title}</Text>
        <Text>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    shadowOpacity: 0.2,
  },
  view2: {
    backgroundColor: "#FDC1BA",
    width: 10,
    height: 98,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  view3: {
    backgroundColor: "#fff",
    height: 98,
    width: 377,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text1: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 15,
  },
});

export default Card;
