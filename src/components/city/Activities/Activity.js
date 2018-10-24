import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";
import { metrics, colors } from "../../../themes";

export default ({ activity, style: containerStyle }) => (
  <TouchableOpacity style={[style.container, containerStyle]}>
    <Image source={{ uri: activity.image }} style={StyleSheet.absoluteFill} />
    <View style={style.iconContainer}>
      <Badge
        value="Get it now"
        textStyle={style.getItText}
        containerStyle={style.getIt}
      />
      <View style={style.spacer} />
      <Text style={style.name}>{activity.name}</Text>
      <Text style={style.tickets}>
        {activity.tickets} ticket
        {activity.tickets === 1 ? "" : "s"} remaining
      </Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    height: 185,
    width: 185,
    borderRadius: metrics.base,
    overflow: "hidden"
  },
  spacer: {
    flex: 1
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: metrics.small
  },
  tickets: {
    color: "white",
    fontSize: 14
  },
  getIt: {
    backgroundColor: "white",
    alignSelf: "flex-end"
  },
  getItText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "bold"
  },
  iconContainer: {
    flex: 1,
    padding: metrics.base
  }
});
