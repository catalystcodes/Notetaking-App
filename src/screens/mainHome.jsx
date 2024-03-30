import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import SearchArea from "../component/searchArea";
import Card from "../component/card";

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
                <Text style={styles.text2}>My Notes</Text>
              </View>
            </View>

            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/favorites.png")} />
                <Text style={styles.text2}>Favorites</Text>
              </View>
            </View>
          </View>

          <View style={styles.view4}>
            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/Categories.png")} />
                <Text style={styles.text2}>Categories</Text>
              </View>
            </View>
            <View>
              <View style={styles.view3}>
                <Image source={require("../../assets/images/shared.png")} />
                <Text style={styles.text2}>Shared</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.text1}>Recents</Text>
        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view8}>
              <Text style={styles.text3}>Design Thinking</Text>
              <Text style={styles.text4}>20/05/2022</Text>
            </View>
            <Text style={styles.text5}>Design thinking is the</Text>
            <Text style={styles.text5}>strategic and practical proce...</Text>
          </View>
          <View style={styles.view7}>
            <View style={styles.view8}>
              <Text style={styles.text3}>Zuriboard Training</Text>
              <Text style={styles.text4}>20/05/2022</Text>
            </View>
            <Text style={styles.text5}>Introduction to product design</Text>
            <Text style={styles.text5}>LMS tasks deadline in 4days</Text>
          </View>
        </View>
        <Text style={styles.text1}>Older</Text>
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
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
    width: 165,
    height: 60,
    borderRadius: 10,
  },
  view4: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 30,
  },
  text2: {
    fontSize: 14,
    fontWeight: "300",
    marginLeft: 15,
  },
  view5: {
    // marginLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  view6: {
    height: 100,
    width: 185,
    backgroundColor: "#AD9DFF",
    borderRadius: 10,
    marginLeft: 20,
    padding: 10,
  },
  view7: {
    height: 100,
    width: 185,
    backgroundColor: "#AD9DFF",
    borderRadius: 10,
    // marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  text3: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  text4: {
    fontSize: 8,
    fontWeight: "300",
    marginLeft: 20,
    color: "#ffff",
    opacity: 0.5,
  },
  view8: {
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  text5: {
    // marginTop: 7,
    fontSize: 12,
    fontWeight: "300",
    color: "#ffff",
  },
});

export default MainHome;
