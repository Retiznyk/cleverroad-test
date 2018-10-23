import React from "react";
import { Text, View, Image, FlatList, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Reply from "./Reply";
import { metrics, colors } from "../../themes";

export default ({ feed, style: containerStyle }) => (
  <View style={containerStyle}>
    <View style={style.row}>
      <View style={[style.avatar, style.item]}>
        <Avatar source={{ uri: feed.avatar }} small rounded />
        <Text style={style.time}>{feed.date}</Text>
      </View>
      <View style={style.message}>
        <View style={[style.senderContainer, style.item]}>
          <Text style={style.sender}>{feed.full_name}</Text>
          {!!feed.place && (
            <Text style={[style.row, style.sender]}>
              <SimpleLineIcons name="location-pin" />
              <Text>{feed.place}</Text>
            </Text>
          )}
        </View>
        <Text style={style.item}>{feed.comment}</Text>
        {feed.photo && (
          <Image
            source={{ uri: feed.photo }}
            style={[style.image, style.item]}
          />
        )}
        <View style={[style.status, style.item]}>
          <View style={style.row}>
            {feed.likes && (
              <Text style={style.reaction}>
                <Text>{feed.likes} </Text>
                <SimpleLineIcons size={15} name="heart" />
              </Text>
            )}
            <View style={style.spacer} />
            {feed.answers && (
              <Text style={style.reaction}>
                <Text>{feed.answers} </Text>
                <SimpleLineIcons size={15} name="bubble" />
              </Text>
            )}
          </View>

          <SimpleLineIcons size={15} name="map" style={style.location} />
        </View>
      </View>
    </View>
    <View style={style.replies}>
      <FlatList
        data={feed.replies}
        renderItem={({ item }) => <Reply reply={item} />}
      />
    </View>
  </View>
);

const style = StyleSheet.create({
  row: {
    flexDirection: "row"
  },
  image: {
    height: 150,
    width: "100%",
    borderRadius: 15
  },
  message: {
    flex: 1
  },
  senderContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sender: {
    color: colors.primary,
    fontSize: 12
  },
  item: {
    marginVertical: 5
  },
  avatar: {
    margin: metrics.base
  },
  status: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  reaction: {
    color: colors.primary
  },
  location: {
    opacity: 0.5
  },
  spacer: {
    width: 5
  },
  time: {
    textAlign: "center",
    color: "gray",
    marginVertical: 5
  }
});
