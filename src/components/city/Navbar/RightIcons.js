import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default () => (
  <View style={style.container}>
    <Icon name="map" size={20} color="white" style={style.icon} />
    <View style={style.spacer} />
    <Icon name="magnifier" size={20} color="white" style={style.icon} />
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon: {
    padding: 5,
    marginTop: 20
  },
  spacer: {
    width: 10
  }
});
