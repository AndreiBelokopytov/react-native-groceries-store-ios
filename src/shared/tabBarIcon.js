import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import Badge from "./Badge";

const tabBarIcon = (Icon, { badge } = { badge: false }) => {
  return ({ focused, count }) => (
    <View style={styles.root}>
      <Icon
        fill={focused ? colors.primary : colors.icon}
        width={24}
        height={24}
      />
      {badge && count > 0 && (
        <View style={styles.badge}>
          <Badge count={count} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 48,
    height: 28,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0
  }
});

export default tabBarIcon;
