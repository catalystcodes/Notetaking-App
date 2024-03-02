import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import KeyboardAvoidView from "../component/KeyboardAvoidView";

const Login = ({ navigation }) => {
  return (
    <KeyboardAvoidView>
      <View style={{ backgroundColor: "#FCFCFC", flexGrow: 1 }}>
        <Image
          style={styles.loginImage}
          source={require("../../assets/images/loginin.png")}
        />
        <Text style={{ textAlign: "center", fontWeight: "800", fontSize: 32 }}>
          Login
        </Text>
        <View style={{ marginLeft: 45, marginTop: 60 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>Email</Text>
          <TextInput
            placeholder=""
            style={styles.inputStyle}
            keyboardType="email-address"
          />
        </View>
        <View style={{ marginLeft: 45, marginTop: 32 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ fontSize: 14, marginRight: 215, fontWeight: "500" }}>
              Password
            </Text>
            <Pressable>
              <Text style={{ fontSize: 15 }}>Forget?</Text>
            </Pressable>
          </View>
          <TextInput placeholder="" secureTextEntry style={styles.inputStyle} />
        </View>
        <Pressable
          style={{
            width: 212,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
            marginTop: 50,
            marginLeft: 110,
            backgroundColor: "#7D57F1",
          }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: 500 }}>
            Log in
          </Text>
        </Pressable>
        <Text
          style={{
            textAlign: "center",
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
          <Text style={{ fontSize: 14 }}>Don't have account?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text
              style={{
                color: "#7D57F1",
                fontSize: 14,
                fontWeight: "600",
                marginLeft: 5,
              }}
            >
              Create Now
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

const styles = StyleSheet.create({
  loginImage: {
    marginLeft: 45,
    // marginBottom: 86,
    // width: 343,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "#E0E0E0",
    width: 320,
    fontSize: 14,
    height: 30,
  },
});

export default Login;
