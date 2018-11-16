import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class ProductListSeparator extends PureComponent {
  render() {
    return <View style={styles.root} />;
  }
}

const styles = StyleSheet.create({
  root: {
    height: 10
  }
});

export default ProductListSeparator;
