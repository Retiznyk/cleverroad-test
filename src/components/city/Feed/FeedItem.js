import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Replies from "./Replies";

import { metrics, colors } from "../../../themes";
import StatusBar from "./StatusBar";
import Sender from "./Sender";

export default ({ feed, style: containerStyle }) => (
  <View style={containerStyle}>
    <View style={style.container}>
      <View style={style.item}>
        <Avatar source={{ uri: feed.avatar }} small rounded />
        <Text style={style.time}>{feed.date}</Text>
      </View>
      <View style={style.spacer} />
      <View style={style.message}>
        <Sender feed={feed} />
        <Text style={style.item}>{feed.comment}</Text>
        {feed.photo && (
          <Image
            source={{ uri: feed.photo }}
            style={[style.image, style.item]}
          />
        )}
        <StatusBar feed={feed} />
      </View>
    </View>
    <Replies style={style.replies} replies={feed.replies} />
  </View>
);

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: metrics.base,
    padding: metrics.base
  },
  row: {
    flexDirection: "row"
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius: metrics.base
  },
  message: {
    flex: 1
  },
  item: {
    marginVertical: metrics.small
  },
  spacer: {
    width: metrics.base
  },
  time: {
    textAlign: "center",
    color: colors.gray,
    marginVertical: metrics.small
  },
  replies: {
    marginTop: metrics.small
  }
});
