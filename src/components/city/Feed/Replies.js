import React from "react";
import { FlatList } from "react-native";
import Reply from "./Reply";

export default ({ replies, style }) => (
  <FlatList
    style={style}
    data={replies}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => <Reply reply={item} />}
  />
);
