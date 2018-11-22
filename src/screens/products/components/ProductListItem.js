import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swipeout from "react-native-swipeout";
import colors from "../../../constants/colors";
import ClearButton from "../../../shared/ClearButton";
import BookmarkIcon from "../../../shared/icons/BookmarkIcon";
import SwipeActionButton from "../../../shared/SwipeActionButton";

class ProductListItem extends PureComponent {
  render() {
    const { product, inFavorites, onSwipe } = this.props;
    return (
      <Swipeout
        autoClose
        backgroundColor="transparent"
        right={this.getSwipeButtons()}
        buttonWidth={120}
        sensitivity={30}
        scroll={onSwipe}
      >
        <View style={styles.root}>
          {product.images.length > 0 && (
            <Image
              source={{ uri: product.images[0].url }}
              style={styles.image}
            />
          )}
          <View style={styles.description}>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.productName}>{product.name}</Text>
              <View style={styles.productPrice}>
                {product.price < product.regular_price && (
                  <Text style={styles.oldPrice}>{product.regular_price} ₽</Text>
                )}
                <Text style={styles.currentPrice}>{product.price} ₽</Text>
              </View>
            </View>
          </View>
          <View style={styles.right}>
            {inFavorites && (
              <BookmarkIcon
                width={12}
                height={12}
                fill={colors.primary}
                style={styles.bookmark}
              />
            )}
            <ClearButton text="Добавить" onPress={this.addToCart} />
          </View>
        </View>
      </Swipeout>
    );
  }

  addToCart = () => this.props.addToCart(this.props.product.id);

  getSwipeButtons = () => {
    const {
      inFavorites,
      product,
      addToFavorites,
      removeFromFavorites
    } = this.props;

    const bookmarkBtn = inFavorites
      ? {
          onPress: () => removeFromFavorites(product.id),
          component: <SwipeActionButton text="Удалить из избранного" />,
          buttonWidth: 120,
          backgroundColor: colors.primary
        }
      : {
          onPress: () => addToFavorites(product.id),
          component: <SwipeActionButton text="В избранное" />,
          buttonWidth: 120,
          backgroundColor: colors.primary
        };

    return [bookmarkBtn];
  };
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
    color: colors.textGray
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
  },
  bookmark: {
    marginRight: 8
  }
});

export default ProductListItem;
