import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class ProductItemSeparator extends Component {
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
    flex: 1,
    height: 11,
    paddingLeft: 94,
    paddingRight: 20,
    backgroundColor: "#fff"
  },
  border: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#BCBBC1",
    width: "100%",
    height: 1
  }
});

export default ProductItemSeparator;
