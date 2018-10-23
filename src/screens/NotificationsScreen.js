import React, { PureComponent } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default class NotificationsScreen extends PureComponent {
  static navigationOptions = {
    title: "Notifications",
    tabBarIcon: <Icon name="bell" size={20} />
  };

  render() {
    return <View />;
  }
}
