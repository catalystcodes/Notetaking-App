import { View, Text, KeyboardAvoidingView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeyboardAvoidView = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidView;
