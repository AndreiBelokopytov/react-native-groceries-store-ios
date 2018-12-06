import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

class ProductListSeparator extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.border} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    paddingLeft: 94,
    paddingRight: 20,
    backgroundColor: colors.white
  },
  border: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    width: "100%",
    height: 1
  }
});

export default ProductListSeparator;
