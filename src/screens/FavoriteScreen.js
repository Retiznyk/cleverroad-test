import React, { PureComponent } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

export default class FavoriteScreen extends PureComponent {
  static navigationOptions = {
    title: "Favorite",
    tabBarIcon: <Icon name="heart" size={20} />
  };

  render() {
    return <View />;
  }
}
