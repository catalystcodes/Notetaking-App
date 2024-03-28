import React from "react";
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
} from "react-native";
import VoiceRecordCard from "./voiceRecordCard";

const RecordList = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require("../../assets/images/Arrow - Left.png")} />
        <Image source={require("../../assets/images/bigMic.png")} />
        <Text style={styles.text1}>
          Clicking the microphone button will start the recording.
        </Text>
        <ScrollView>
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
          <VoiceRecordCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  text1: {
    marginTop: 20,
    marginBottom: 50,
    fontSize: 12,
    textAlign: "center",
  },
});

export default RecordList;
