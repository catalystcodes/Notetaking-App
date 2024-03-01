import React from "react";

import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";

const Onboarding2 = () => {
  return (
    <SafeAreaView>
      <View>
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
        <Image
          style={{ marginRight: 8 }}
          source={require("../../assets/images/Ellipse2.png")}
        />
        <Image source={require("../../assets/images/Ellipse1.png")} />
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 35,
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        Great way to collaborate
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        and share
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
        Now you can save and access your note online.
      </Text>
      <Text
        style={{
          textAlign: "center",
          marginLeft: 33,
          marginRight: 34,
        }}
      >
        {" "}
        collaborate and share your notes with friends
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
        style={{
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
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Get Started
        </Text>
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
});

export default Onboarding2;
