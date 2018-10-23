import React from "react";
import { Image } from "react-native";

const sources = {
  entertainment: require("@resources/icons/tourIcn.png"),
  event: require("@resources/icons/eventIcn.png"),
  restaurant: require("@resources/icons/restIcn.png"),
  breakfast: require("@resources/icons/burger-icon-white.png"),
  masajid: require("@resources/icons/masjidIcn.png"),
  coffee: require("@resources/icons/coffeeIcn.png")
};

export default ({ name, size }) => {
  return <Image source={sources[name]} style={{ height: size, width: size }} />;
};
