import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../themes";

export default () => (
  <View style={style.container}>
    <Icon name="plus-circle" size={60} color={colors.primary} />
  </View>
);

const style = StyleSheet.create({
  container: {
    borderRadius: 75,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
