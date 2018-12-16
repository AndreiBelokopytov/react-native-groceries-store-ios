import React, { PureComponent } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Text
} from "react-native";
import colors from "../../constants/colors";
import ImageGradient from "../../shared/ImageGradient";
import StyledText from "../../shared/StyledText";
import pluralize from "../../utils/pluralize";
import ImageLoader from "../../shared/ImageLoader";

const productsText = pluralize({
  "0": "нет продуктов",
  "1": "продукт",
  "2-4": "продукта",
  many: "продуктов"
});

class CategoryListItem extends PureComponent {
  render() {
    const { category } = this.props;
    return (
      <TouchableHighlight
        style={styles.root}
        underlayColor="rgba(0, 0, 0, 0.8)"
        onPress={this.onPress}
      >
        <View style={styles.container}>
          <ImageLoader
            source={{ uri: category.image_medium }}
            style={styles.image}
          />
          <View style={styles.overlay}>
            <ImageGradient borderRadius={8} />
          </View>
          <View style={styles.info}>
            <StyledText
              style={styles.name}
              text={category.name}
              variant="title3"
            />
            <StyledText
              style={styles.products}
              text={category.products + " " + productsText(category.products)}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  onPress = () => this.props.onPress(this.props.category.id);
}

const styles = StyleSheet.create({
  root: {
    height: 113,
    width: "100%",
    borderRadius: 8
  },
  container: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8
  },
  info: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    color: colors.white,
    marginBottom: 6
  },
  products: {
    color: "rgba(255, 255, 255, 0.86)"
  }
});

export default CategoryListItem;
