import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CategoryInfo from "../../../shared/CategoryInfo";
import ImageGradient from "../../../shared/ImageGradient";

class ProductListHeader extends Component {
  render() {
    const { image, name, products } = this.props;
    return (
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.overlay}>
          <ImageGradient />
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.info}>
            <Text style={styles.title}>Категория</Text>
            <CategoryInfo name={name} products={products} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  image: {
    width: "100%",
    height: "100%"
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  infoWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
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
  },
  info: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 30,
    paddingBottom: 26,
    justifyContent: "flex-end",
    alignItems: "stretch"
  }
});

export default ProductListHeader;
