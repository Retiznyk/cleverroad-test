import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import { metrics, colors } from "../../themes";

export default ({ activity, style: containerStyle }) => (
  <TouchableOpacity style={[style.container, containerStyle]}>
    <Image source={{ uri: activity.image }} style={StyleSheet.absoluteFill} />
    <View style={style.iconContainer}>
      <View style={style.getIt}>
        <Text style={style.getItText}>Get it now</Text>
      </View>
      <View style={style.spacer} />
      <Text style={style.name}>{activity.name}</Text>
      <Text style={style.tickets}>{activity.tickets} tickets remaining</Text>
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
    padding: metrics.small,
    borderRadius: 14,
    width: 100,
    alignSelf: "flex-end"
  },
  getItText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },
  iconContainer: {
    flex: 1,
    padding: metrics.base
  }
});
