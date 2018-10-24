import React from "react";
import { View, StyleSheet } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Likes from "./Likes";
import Comments from "./Comments";
import { metrics } from "../../../themes";

export default ({ feed, style: containerStyle }) => (
  <View style={[style.container, containerStyle]}>
    <View style={style.row}>
      <Likes value={feed.likes} />
      <View style={style.spacer} />
      <Comments value={feed.answers} />
    </View>

    <SimpleLineIcons size={15} name="map" style={style.location} />
  </View>
);

const style = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  spacer: {
    width: metrics.small
  },
  location: {
    opacity: 0.5
  }
});
