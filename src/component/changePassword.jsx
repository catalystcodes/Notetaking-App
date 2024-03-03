import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ChangePassword = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card}>
          <CollectionIcon />
          <Text style={styles.cardDetails}>Collections</Text>
          <ArrowRight />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFC",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 400,
    padding: 20,
    borderRadius: 10,
  },
  cardDetails: {
    marginRight: 125,
    fontSize: 16,
  },
});
});

export default ChangePassword;
