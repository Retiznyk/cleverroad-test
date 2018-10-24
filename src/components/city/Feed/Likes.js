import React from "react";
import { Text } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { colors } from "../../../themes";

export default ({ value }) =>
  value > 0 && (
    <Text style={{ color: colors.primary }}>
      <Text>{value} </Text>
      <SimpleLineIcons size={15} name="heart" />
    </Text>
  );
