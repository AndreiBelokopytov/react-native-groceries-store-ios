import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import pluralize from "../utils/pluralize";
import StyledButton from "./StyledButton";

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
      <View style={styles.root}>
        <Text style={styles.name}>{name}</Text>
        <StyledButton touchable={false}>
          <Text>
            {products === 0
              ? productsText(products)
              : products + " " + productsText(products)}
          </Text>
        </StyledButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 0.0145,
    textShadowOffset: {
      width: 1,
      height: 0
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.16)"
  }
});

export default CategoryInfo;
