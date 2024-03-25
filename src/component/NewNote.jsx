import { useState } from "react";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Modal,
  Text,
  Pressable,
} from "react-native";

const NewNote = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <View style={styles.view1}>
          <Image source={require("../../assets/images/Arrow - Left.png")} />
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Image source={require("../../assets/images/save.png")} />
          </Pressable>
        </View>
        <TextInput placeholder="Add Title" style={styles.addTitle} />
        <TextInput
          placeholder="Type something......"
          style={styles.addTitle2}
        />
      </View>
      <Modal visible={isModalVisible}>
        <View style={styles.saveOption}>
          <View style={styles.view2}>
            <Image source={require("../../assets/images/caution.png")} />
            <Text style={styles.saveStatement}>Save Changes ?</Text>
          </View>
          <View style={styles.options}>
            <Pressable
              onPress={() => setIsModalVisible(false)}
              style={styles.discard}
            >
              <Text style={styles.discardText}>Discard</Text>
            </Pressable>
            <Pressable style={styles.save}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view1: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view2: {
    marginTop: 41,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  saveStatement: {
    marginTop: 25,
    fontSize: 20,
    fontWeight: "500",
  },
  addTitle: {
    marginLeft: 20,
    height: 30,
    fontSize: 32,
    fontWeight: 300,
  },
  addTitle2: {
    marginTop: 37,
    marginLeft: 20,
    height: 30,
    fontSize: 15,
    fontWeight: 300,
  },
  saveOption: {
    height: 235,
    width: 330,
    backgroundColor: "#a4a4",
    borderRadius: 10,
    marginTop: 329,
    marginLeft: 50,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  discard: {
    // padding: 10,
    height: 39,
    width: 112,
    backgroundColor: "#8D8D8D",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  discardText: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
  save: {
    height: 39,
    width: 112,
    backgroundColor: "#7D57F1",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 32,
  },
  saveText: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
});

export default NewNote;
