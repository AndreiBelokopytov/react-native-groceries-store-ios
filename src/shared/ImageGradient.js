import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo";

class ImageGradient extends PureComponent {
  render() {
    const { borderRadius } = this.props;
    return (
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.45)"]}
        style={[styles.gradient, { borderRadius }]}
      />
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%"
  }
});

export default ImageGradient;
