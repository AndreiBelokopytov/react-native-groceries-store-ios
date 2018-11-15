import React from "react";
import colors from "../constants/colors";

const tabBarIcon = Icon => {
  return ({ focused }) => (
    <Icon
      fill={focused ? colors.primary : colors.icon}
      width={24}
      height={24}
    />
  );
};

export default tabBarIcon;
