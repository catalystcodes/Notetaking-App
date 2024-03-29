import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";

const MainHome = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.view1}>
          <Image source={require("../../assets/images/strokes.png")} />
          <Text></Text>
          <Image
            source={require("../../assets/images/_avatarM.png")}
            style={styles.avatar}
          />
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    justifyContent: "space-between",
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
    marginLeft: 8,
  },
});

export default MainHome;
