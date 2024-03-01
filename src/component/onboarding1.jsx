import React from "react";

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  Button,
} from "react-native";

const Onboarding1 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              textAlign: "right",
              fontSize: 14,
              fontWeight: "500",
              marginTop: 35,
              marginRight: 26,
            }}
          >
            SKIP
          </Text>
        </Pressable>
        <Image
          style={styles.image1}
          source={require("../../assets/images/conifer-writer.png")}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image source={require("../../assets/images/Ellipse1.png")} />
        <Image
          style={{ marginLeft: 8 }}
          source={require("../../assets/images/Ellipse2.png")}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 35,
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        An Actual notebook in
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        your pocket
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginLeft: 33,
          marginRight: 34,
          marginTop: 15,
          lineHeight: 23.87,
        }}
      >
        Take notes quickly and easily. Get your ideas
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginLeft: 33,
          marginRight: 34,
        }}
      >
        {" "}
        penned down,
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginLeft: 33,
          marginRight: 34,
        }}
      >
        where ever and when ever
      </Text>
      <Pressable
        style={styles.getStartedButton}
        onPress={() => navigation.navigate("Onboarding2")}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image1: {
    marginLeft: 45,
    marginBottom: 86,
    width: 343,
  },
  getStartedButton: {
    width: 212,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 45,
    marginLeft: 110,
    //   paddingTop: 20,
    //   paddingBottom: 28,

    backgroundColor: "#7D57F1",
  },
  getStartedText: {
    color: "white",
    fontSize: 18,
    fontWeight: 500,
  },
});

export default Onboarding1;
