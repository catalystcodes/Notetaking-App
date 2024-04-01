import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
    width: wp(89.3),
  },
  inputStyle: {
    marginLeft: 6,
    marginLeft: 8,
    flexGrow: 1,
  },
});

export default SearchArea;
