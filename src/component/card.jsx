import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Card = ({ title, details, decColor }) => {
  return (
    <View style={styles.view1}>
      <View style={[styles.view2, { backgroundColor: decColor }]}></View>
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
    shadowOpacity: 0.2,
    elevation: 2,
  },
  view2: {
    width: wp(2.7),
    height: hp(11.8),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  view3: {
    backgroundColor: "#fff",
    width: wp(85.6),
    height: hp(11.8),
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
