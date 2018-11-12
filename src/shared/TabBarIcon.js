import React from "react";
import colors from "../constants/colors";

const tabBarIcon = Icon => {
  return ({ focused, horizontal, tintColor }) => (
    <Icon fillColor={focused ? colors.primary : colors.icon} />
  );
};

export default tabBarIcon;
