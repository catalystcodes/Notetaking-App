import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";

const SearchArea = () => {
  return (
    <View>
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
  );
};

const styles = StyleSheet.create({
  view3: {
    marginLeft: 20,
    marginRight: 20,
    // marginBottom: 190,
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

export default SearchArea;
