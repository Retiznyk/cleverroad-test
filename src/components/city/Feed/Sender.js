import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "../../../themes";

export default ({ feed, style: containerStyle }) => (
  <View style={[style.container, containerStyle]}>
    <Text style={style.text}>{feed.full_name}</Text>
    {!!feed.place && (
      <Text style={[style.row, style.text]}>
        <SimpleLineIcons name="location-pin" />
        <Text>{feed.place}</Text>
      </Text>
    )}
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  row: {
    flexDirection: "row"
  },
  text: {
    color: colors.primary,
    fontSize: 12
  }
});
