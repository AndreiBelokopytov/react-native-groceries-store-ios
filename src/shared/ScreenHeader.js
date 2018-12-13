import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";

class ScreenHeader extends Component {
  render() {
    const { children } = this.props;
    return <View style={styles.root}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-end",
    height: 140,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.hairlineBorder,
    paddingHorizontal: 20,
    paddingBottom: 16
  }
});

export default ScreenHeader;
