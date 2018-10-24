import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import TabBarIcon from "../components/add/TabBarIcon";

export default class AddScreen extends PureComponent {
  static navigationOptions = {
    title: "",
    tabBarIcon: <TabBarIcon />
  };

  render() {
    return <View />;
  }
}
