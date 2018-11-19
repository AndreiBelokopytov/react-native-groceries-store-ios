import React, { PureComponent } from "react";
import { Image, View, StyleSheet } from "react-native";
import ImageGradient from "../../../shared/ImageGradient";

class ProductListImageBg extends PureComponent {
  render() {
    const { image } = this.props;
    return (
      <View style={styles.root}>
        <React.Fragment>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.gradient}>
            <ImageGradient />
          </View>
        </React.Fragment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  gradient: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%"
  }
});

export default ProductListImageBg;
