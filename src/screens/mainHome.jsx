import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import SearchArea from "../component/searchArea";

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
        <Text style={styles.text1}>Notes</Text>
        <SearchArea />
        <View>
          <View style={styles.view2}>
            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/myNote.png")} />
                <Text>My Notes</Text>
              </View>
            </View>

            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/favorites.png")} />
                <Text>Favorites</Text>
              </View>
            </View>
          </View>

          <View style={styles.view4}>
            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/Categories.png")} />
                <Text>Categories</Text>
              </View>
            </View>
            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/shared.png")} />
                <Text>Shared</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.text1}>Recents</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {},
  text1: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 20,
    marginBottom: 14,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffff",
    width: 170,
    height: 60,
    borderRadius: 10,
  },
  view4: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 30,
  },
});

export default MainHome;
