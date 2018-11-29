import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";

class SwipeActionButton extends PureComponent {
  render() {
    const { text } = this.props;
    return (
      <View style={styles.root}>
        <StyledText style={styles.text} text={text} />
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
    color: "#fff"
  }
});

export default SwipeActionButton;
