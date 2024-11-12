import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  TextInput,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Home1 = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image source={require("../../assets/images/strokes.png")} />
          <Text></Text>
          <Image
            source={require("../../assets/images/_avatarM.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.view2}>
          <Text style={styles.text1}>Hey! Kayla</Text>
          <Text style={styles.text2}>Let’s start making notes</Text>
        </View>
        <View style={styles.view3}>
          <Image source={require("../../assets/images/search.png")} />
          <TextInput
            placeholder="Search"
            style={styles.inputStyle}
            keyboardType="default"
          />
          <Image source={require("../../assets/images/microphone copy.png")} />
        </View>
        <View>
          <Text style={styles.view4Text}>
            There is nothing here.Create your
          </Text>
          <Text style={styles.view4Text}>first note</Text>
        </View>
        <View style={styles.view5}>
          <Image
            source={require("../../assets/images/add.png")}
            style={styles.addButton}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    justifyContent: "space-between",
  },
  view2: {
    marginLeft: 20,
    marginBottom: 30,
  },
  text1: {
    fontSize: 14,
    fontWeight: "500",
  },
  text2: {
    fontSize: 12,
    fontWeight: "300",
  },
  view3: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 190,
    backgroundColor: "#ffff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  inputStyle: {
    width: 328,
    marginLeft: 6,
    // marginLeft: 8,
  },
  view4Text: {
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
  },
  view5: {
    marginBottom: 400,
  },
  addButton: {
    marginLeft: 375,
    marginTop: 320,
  },
});

export default Home1;
