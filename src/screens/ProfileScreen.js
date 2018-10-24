import React, { PureComponent } from "react";
import { View } from "react-native";
import TabBarIcon from "../components/profile/TabBarIcon";

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    title: "Profile",
    tabBarIcon: <TabBarIcon />
  };

  render() {
    return <View />;
  }
}
