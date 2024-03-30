import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}></View>
      <View style={styles.view3}>
        <Text style={styles.text1}>Randoms</Text>
        <Text>
          This is some random thoughts, I’m still thinking of what to make of
          this. Hmm! what should I focus on or....
        </Text>
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
