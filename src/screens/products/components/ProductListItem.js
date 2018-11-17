import React, { PureComponent } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Swipeout from "react-native-swipeout";
import colors from "../../../constants/colors";
import ClearButton from "../../../shared/ClearButton";
import SwipeActionButton from "../../../shared/SwipeActionButton";

class ProductListItem extends PureComponent {
  right = [
    {
      onPress: () => console.log("Added"),
      component: <SwipeActionButton text="В избранное" />,
      buttonWidth: 120,
      backgroundColor: colors.primary
    }
  ];

  render() {
    const { item, onSwipe } = this.props;
    return (
      <Swipeout
        autoClose
        backgroundColor="transparent"
        right={this.right}
        buttonWidth={120}
        sensitivity={30}
        scroll={onSwipe}
      >
        <View style={styles.root}>
          {item.images.length > 0 && (
            <Image source={{ uri: item.images[0].url }} style={styles.image} />
          )}
          <View style={styles.description}>
            <View style={styles.descriptionWrapper}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.productPrice}>
                {item.price < item.regular_price && (
                  <Text style={styles.oldPrice}>{item.regular_price} ₽</Text>
                )}
                <Text style={styles.currentPrice}>{item.price} ₽</Text>
              </View>
            </View>
          </View>
          <View style={styles.button}>
            <ClearButton text="Добавить" />
          </View>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    borderBottomColor: "#BCBBC1",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 8,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20
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
  button: {
    justifyContent: "center",
    marginLeft: 16
  }
});

export default ProductListItem;
