import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import LeftIcons from "./LeftIcons";
import RightIcons from "./RightIcons";
import { metrics } from "../../../themes";

export default () => (
  <Header
    backgroundColor="transparent"
    outerContainerStyles={style.container}
    leftComponent={<LeftIcons />}
    rightComponent={<RightIcons />}
  />
);

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    height: metrics.headerHeight
  }
});
