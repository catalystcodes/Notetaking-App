import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ArrowRight from "./icons/ArrowRight";
import ChangePasswordIcon from "./icons/ChangePasswordIcon";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ChangePassword = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconView}>
            <ChangePasswordIcon />
          </View>
          <Text style={styles.cardDetails}>Change Password</Text>
          <ArrowRight />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowColor: "black",
    elevation: 3,
    shadowOpacity: 0.2,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: wp(89.3),
    paddingVertical: hp(2.5),
    paddingHorizontal: wp(5.3),
  },
  cardDetails: {
    marginRight: 125,
    fontSize: 16,
  },
  iconView: {
    width: 36,
    height: 36,
  },
});

export default ChangePassword;
