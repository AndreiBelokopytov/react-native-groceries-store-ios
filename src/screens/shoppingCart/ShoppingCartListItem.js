import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import NumericInput from "../../shared/NumericInput";
import colors from "../../constants/colors";

class ShoppingCartListItem extends PureComponent {
  render() {
    const { product, count, categoryId } = this.props;
    return (
      <View style={styles.root}>
        {product.images.length > 0 && (
          <Image
            source={{ uri: product.images[0].url_small }}
            style={styles.image}
          />
        )}
        <View style={styles.description}>
          <View style={styles.descriptionWrapper}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.currentPrice}>{product.price} ₽</Text>
          </View>
        </View>
        <View style={styles.right}>
          <NumericInput
            renderValue={this.renderValue}
            value={count}
            minValue={0}
            maxValue={99}
            onChange={this.onChange}
          />
        </View>
      </View>
    );
  }
  onChange = cnt =>
    this.props.changeCount(
      this.props.product.id,
      this.props.categoryId,
      cnt - this.props.count
    );
  renderValue = value => (
    <View style={styles.countContainer}>
      <Text style={styles.countText}>{value}</Text>
    </View>
  );
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
    height: 62,
    borderRadius: 10
  },
  description: {
    flexDirection: "row",
    flex: 1,
    marginLeft: 12
  },
  descriptionWrapper: {
    justifyContent: "space-between"
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
  countContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30
  },
  countText: {
    fontSize: 24
  },
  right: {
    height: "100%",
    width: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default ShoppingCartListItem;
