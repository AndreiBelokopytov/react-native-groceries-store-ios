import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import pluralize from "../utils/pluralize";

const productsText = pluralize({
  "0": "нет продуктов",
  "1": "продукт",
  "2-4": "продукта",
  many: "продуктов"
});

class CategoryInfo extends PureComponent {
  render() {
    const { name, products } = this.props;

    return (
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.products}>
          {products + " " + productsText(products)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 25,
    lineHeight: 42
  },
  products: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 16,
    opacity: 0.94
  }
});

export default CategoryInfo;
