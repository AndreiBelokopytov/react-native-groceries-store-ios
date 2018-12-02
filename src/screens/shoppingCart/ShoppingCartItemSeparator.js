import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

class ShoppingCartItemSeparator extends Component {
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
    backgroundColor: "#fff",
    justifyContent: "flex-end"
  },
  border: {
    width: "100%",
    height: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#BCBBC1"
  }
});

export default ShoppingCartItemSeparator;
