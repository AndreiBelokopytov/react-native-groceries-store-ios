import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class CategoryListSeparator extends PureComponent {
  render() {
    return <View style={styles.root} />;
  }
}

const styles = StyleSheet.create({
  root: {
    height: 20
  }
});

export default CategoryListSeparator;
