import React from "React";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Badge } from "react-native-elements";
import Place from "./Place";

import { fonts, metrics, colors } from "../../themes";

export default ({ places }) => (
  <View style={style.container}>
    <View style={style.header}>
      <Text style={fonts.title}>What is in Dubai</Text>
      <Badge
        value="Hotels"
        containerStyle={style.badgeContainer}
        textStyle={style.badgeText}
      />
    </View>
    <View style={style.spacer} />
    <FlatList
      data={places}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <Place place={item} />}
      numColumns={3}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    padding: metrics.double,
    backgroundColor: "white"
  },
  spacer: {
    height: metrics.base
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  badgeText: {
    color: "white"
  },
  badgeContainer: {
    backgroundColor: colors.primary
  }
});
