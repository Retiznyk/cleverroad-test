import { Platform } from "react-native";

export default {
  small: 5,
  base: 15,
  double: 30,

  headerHeight: Platform.OS === "ios" ? 90 : 50
};
