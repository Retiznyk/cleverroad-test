import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";

import FeedItem from "./FeedItem";
import { fonts, metrics } from "../../themes";

export default ({ feed }) => (
  <View style={style.container}>
    <Text style={fonts.title}>People in your city</Text>
    <FlatList
      data={feed}
      renderItem={({ item }) => <FeedItem feed={item} style={style.item} />}
      scrollEnabled={false}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    padding: metrics.double
  },
  item: {
    marginVertical: metrics.base
  }
});
