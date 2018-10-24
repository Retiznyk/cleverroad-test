import React from "react";
import { StyleSheet } from "react-native";
import { Badge } from "react-native-elements";

export default () => (
  <Badge
    value="Change City"
    containerStyle={style.container}
    textStyle={style.text}
  />
);

const style = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1
  },
  text: {
    color: "white"
  }
});
