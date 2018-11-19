import React, { PureComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import CategoryInfo from "../../../shared/CategoryInfo";

class ProductListHeader extends PureComponent {
  render() {
    const { category } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.info}>
          <Text style={styles.title}>Категория</Text>
          <CategoryInfo name={category.name} products={category.products} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "stretch"
  },
  info: {
    paddingLeft: 20,
    paddingRight: 30,
    paddingBottom: 26
  },
  title: {
    marginBottom: 5,
    color: "#fff",
    fontSize: 13,
    lineHeight: 16,
    textShadowOffset: {
      width: 1,
      height: 0
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.16)"
  }
});

export default ProductListHeader;
