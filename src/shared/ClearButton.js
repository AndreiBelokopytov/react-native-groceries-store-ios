import React, { PureComponent } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";

const BORDER_RADIUS = 23;

class ClearButton extends PureComponent {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.root}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 28,
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    borderColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 7,
    paddingRight: 7
  },
  text: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.primary
  }
});

export default ClearButton;
