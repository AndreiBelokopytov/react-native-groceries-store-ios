import * as React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

class ProductsListHeader extends React.Component {
  render() {
    return <View style={styles.root} />;
  }
}

const styles = StyleSheet.create({
  root: {
    height: 20,
    backgroundColor: colors.white
  }
});

export default ProductsListHeader;
