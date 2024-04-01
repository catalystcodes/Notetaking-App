import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const VoiceRecordCard = () => {
  return (
    <View style={styles.view0}>
      <View style={styles.view1}>
        <Image source={require("../../assets/images/playIcon.png")} />
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>New Task Procedure</Text>
        <View style={styles.voiceSize}></View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text1}>00:00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  voiceSize: {
    height: hp(1),
    width: wp(52.5),
    borderRadius: 10,
    backgroundColor: "#EFEFEF",
  },
  view0: {
    height: hp(9.1),
    width: wp(89.3),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
    shadowOpacity: 0.2,
  },
  view1: {
    marginLeft: 20,
  },
  view2: {
    marginLeft: 12,
  },
  text: {
    fontSize: 11,
    marginBottom: 12,
  },
  text1: {
    fontSize: 11,
    marginTop: 25,
    marginLeft: 10,
  },
});

export default VoiceRecordCard;
