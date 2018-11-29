import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

class IconButton extends Component {
  render() {
    const { children, onPress } = this.props;
    return (
      <TouchableOpacity
        style={styles.root}
        activeOpactiy={0.7}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  }
});

export default IconButton;
