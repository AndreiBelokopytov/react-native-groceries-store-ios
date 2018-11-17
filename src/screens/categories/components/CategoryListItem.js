import React, { PureComponent } from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import CategoryInfo from "../../../shared/CategoryInfo";
import ImageGradient from "../../../shared/ImageGradient";

const BORDER_RADIUS = 8;

class CategoryListItem extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <TouchableHighlight
        style={styles.root}
        activeOpacity={0.6}
        onPress={this.onPress}
      >
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.overlay}>
            <ImageGradient borderRadius={8} />
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.info}>
              <CategoryInfo name={item.name} products={item.products} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  onPress = () => this.props.onPressItem(this.props.item.id);
}

const styles = StyleSheet.create({
  root: {
    height: 113,
    width: "100%",
    borderRadius: BORDER_RADIUS,
    backgroundColor: "#000"
  },
  container: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: BORDER_RADIUS
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: BORDER_RADIUS
  },
  infoWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%"
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
