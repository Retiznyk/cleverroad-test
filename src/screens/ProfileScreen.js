import React, { PureComponent } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-elements";

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    title: "Profile",
    tabBarIcon: (
      <Avatar
        source={require("@resources/icons/profileIcn.png")}
        width={20}
        height={20}
        rounded
      />
    )
  };

  render() {
    return <View />;
  }
}
