import React, { PureComponent } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import CategoryInfo from "../../../shared/CategoryInfo";
import ImageGradient from "../../../shared/ImageGradient";

class CategoryListItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={styles.root}
        activeOpacity={0.4}
        onPress={this.onPress}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.overlay}>
          <ImageGradient borderRadius={8} />
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.info}>
            <CategoryInfo name={item.name} products={item.products} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onPress = () => this.props.onPressItem(this.props.item.id);
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
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 8
  },
  infoWrapper: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  info: {
    paddingLeft: 20,
    paddingRight: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default CategoryListItem;
