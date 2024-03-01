import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";

const SignUp = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/images/signUpImage.png")}
        style={{ marginBottom: 20, marginLeft: 80 }}
      />
      <Text style={{ textAlign: "center", fontWeight: "800", fontSize: 32 }}>
        Sign Up
      </Text>
      <View style={{ marginLeft: 32, marginTop: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Full Name</Text>
        <TextInput
          placeholder=""
          style={styles.inputStyle}
          keyboardType="email-address"
        />
      </View>
      <View style={{ marginLeft: 31, marginTop: 15, marginBottom: 15 }}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Email</Text>
        <TextInput
          placeholder=""
          style={styles.inputStyle}
          keyboardType="email-address"
        />
      </View>
      <View style={{ marginLeft: 32 }}>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Password</Text>
        <TextInput
          placeholder=""
          style={styles.inputStyle}
          keyboardType="email-address"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 31,
          marginTop: 15,
        }}
      >
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#7D57F1" : undefined}
        />
        <Text style={{ fontWeight: "300", fontSize: 12 }}>
          I agree to the terms of use and Privacy Policy
        </Text>
      </View>
      <Pressable style={styles.signUp}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
          Sign Up
        </Text>
      </Pressable>
      <Text
        style={{
          textAlign: "center",
          color: "#616161",
          marginTop: 13,
          marginBottom: 20,
          fontWeight: "500",
          fontSize: 14,
        }}
      >
        Or continue with
      </Text>
      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: 4,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 36,
            paddingRight: 36,
            marginRight: 16,
          }}
        >
          <Image source={require("../../assets/images/google.png")} />
          <Text style={{ marginLeft: 5 }}>Google</Text>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: 4,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 36,
            paddingRight: 36,
          }}
        >
          <Image source={require("../../assets/images/facebook.png")} />
          <Text style={{ marginLeft: 5 }}>Facebook</Text>
        </Pressable>
      </Pressable>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 14 }}>Already have an account?</Text>
        <Pressable>
          <Text
            style={{
              color: "#7D57F1",
              fontSize: 14,
              fontWeight: "600",
              marginLeft: 5,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: "#E0E0E0",
    borderWidth: 2,
    borderTopColor: "white",
    borderLeftColor: "white",
    borderRightColor: "white",
    width: 320,
    fontSize: 14,
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 15,
  },
  signUp: {
    width: 212,
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 25,
    marginLeft: 110,
    backgroundColor: "#7D57F1",
  },
});

export default SignUp;
