import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

class SwipeActionButton extends PureComponent {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.root}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 13,
    lineHeight: 16
  }
});

export default SwipeActionButton;
