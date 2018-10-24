import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

import FeedItem from "./FeedItem";
import { fonts, metrics, colors } from "../../themes";

export default ({ feed }) => (
  <View style={style.container}>
    <Text style={style.title}>People in your city</Text>
    <FlatList
      data={feed}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <FeedItem feed={item} style={style.item} />}
      scrollEnabled={false}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    padding: metrics.base
  },
  item: {
    marginVertical: metrics.small
  },
  title: {
    ...fonts.title,
    marginBottom: metrics.base
  }
});
