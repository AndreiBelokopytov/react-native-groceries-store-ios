import React, { PureComponent } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo";
import pluralize from "../utils/pluralize";
import StyledButton from "./StyledButton";

const productsText = pluralize({
  "0": "нет продуктов",
  "1": "продукт",
  "2-4": "продукта",
  many: "продуктов"
});

class CategoryListItem extends PureComponent {
  render() {
    const { item, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.root}
        activeOpacity={0.4}
        onPress={onPress}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.45)"]}
          style={styles.overlay}
        />
        <View style={styles.container}>
          <Text style={styles.name}>{item.name}</Text>
          <StyledButton
            text={
              item.products === 0
                ? productsText(item.products)
                : item.products + " " + productsText(item.products)
            }
            touchable={false}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 113,
    width: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    paddingLeft: 20,
    paddingRight: 30,
    flex: 1,
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
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    borderRadius: 8
  }
});

export default CategoryListItem;
