import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";

const Voicenoterec = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require("../../assets/images/Arrow - Left.png")} />
        <TextInput placeholder="Add Title" style={styles.addTitle} />
        <Image
          source={require("../../assets/images/recordwave.png")}
          style={styles.waves}
        />
        <Text style={styles.timer}>00:10:02</Text>
        <View style={styles.controller}>
          <Image source={require("../../assets/images/start.png")} />
          <Image
            source={require("../../assets/images/resume.png")}
            style={styles.resume}
          />
          <Image source={require("../../assets/images/stop.png")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 23,
    marginLeft: 21,
  },
  addTitle: {
    marginTop: 37,
    marginBottom: 72,
    height: 30,
    fontSize: 32,
    fontWeight: 300,
  },
  waves: {
    marginBottom: 70,
  },
  timer: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 70,
  },
  controller: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resume: {
    marginLeft: 32,
    marginRight: 33,
  },
});

export default Voicenoterec;
