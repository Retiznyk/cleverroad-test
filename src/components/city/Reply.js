import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { metrics, colors } from "../../themes";

export default ({ reply }) => (
  <View style={style.container}>
    <Avatar source={{ uri: reply.avatar }} rounded small />
    <View style={style.comment}>
      <Text>{reply.comment}</Text>
    </View>
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  comment: {
    marginHorizontal: metrics.small,
    padding: metrics.base,
    borderRadius: metrics.base,
    backgroundColor: colors.lightestGray,
    flex: 1
  }
});
