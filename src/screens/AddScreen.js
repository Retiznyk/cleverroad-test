import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../themes";

const style = StyleSheet.create({
  plusIcon: {
    borderRadius: 75,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default class AddScreen extends PureComponent {
  static navigationOptions = {
    title: "",
    tabBarIcon: (
      <View style={style.plusIcon}>
        <Icon name="plus-circle" size={60} color={colors.primary} />
      </View>
    )
  };

  render() {
    return <View />;
  }
}
