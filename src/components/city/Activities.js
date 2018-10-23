import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import Activity from "./Activity";

import { fonts, metrics } from "../../themes";

export default ({ activities }) => (
  <View style={style.container}>
    <Text style={style.title}>Active now in your city</Text>
    <FlatList
      data={activities}
      renderItem={({ item }) => <Activity activity={item} style={style.item} />}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    paddingVertical: metrics.double
  },
  title: {
    ...fonts.title,
    margin: metrics.base
  },
  item: {
    marginLeft: metrics.base
  }
});
