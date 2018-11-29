import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import StyledText from "./StyledText";

class ScreenHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.root}>
        <StyledText text={title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-end",
    height: 140,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.hairlineBorder,
    paddingHorizontal: 20,
    paddingBottom: 9
  }
});

export default ScreenHeader;
