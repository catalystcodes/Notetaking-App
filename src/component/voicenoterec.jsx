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
    height: 22,
    fontSize: 32,
    fontWeight: 300,
  },
  waves: {
    marginBottom: 70,
  },
});

export default Voicenoterec;
