import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import Activity from "./Activity";

import { fonts, metrics, colors } from "../../themes";

export default ({ activities }) => (
  <View style={style.container}>
    <Text style={style.title}>Active now in your city</Text>
    <View style={style.spacer} />
    <FlatList
      data={activities}
      keyExtractor={item => item.id.toString()}
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
    marginHorizontal: metrics.base
  },
  spacer: {
    marginVertical: metrics.base
  },
  item: {
    marginLeft: metrics.base
  }
});
