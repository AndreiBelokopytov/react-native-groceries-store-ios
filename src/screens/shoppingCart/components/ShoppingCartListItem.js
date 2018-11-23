import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../../../constants/colors";

class ShoppingCartListItem extends PureComponent {
  render() {
    const { product } = this.props;
    return (
      <View style={styles.root}>
        {product.images.length > 0 && (
          <Image source={{ uri: product.images[0].url }} style={styles.image} />
        )}
        <View style={styles.description}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.productPrice}>
            {product.price < product.regular_price && (
              <Text style={styles.oldPrice}>{product.regular_price} ₽</Text>
            )}
            <Text style={styles.currentPrice}>{product.price} ₽</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff"
  },
  image: {
    width: 62,
    height: 62
  },
  description: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 12
  },
  descriptionWrapper: {
    justifyContent: "center"
  },
  productName: {
    fontSize: 13,
    lineHeight: 16,
    marginBottom: 6
  },
  productPrice: {
    flexDirection: "row"
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 22,
    color: colors.primary
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    color: colors.textDisabled,
    textDecorationLine: "line-through",
    marginRight: 6
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 16
  }
});

export default ShoppingCartListItem;
