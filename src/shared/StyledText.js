import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class StyledText extends Component {
  render() {
    const { variant, text, style } = this.props;
    let titleStyle;
    switch (variant) {
      case "title1": {
        titleStyle = styles.title1;
        break;
      }
      case "title2": {
        titleStyle = styles.title2;
        break;
      }
      case "title3": {
        titleStyle = styles.title3;
        break;
      }
      default:
        titleStyle = styles.description;
    }

    return <Text style={[titleStyle, style]}>{text}</Text>;
  }
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: "600"
  },
  title2: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600"
  },
  title3: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600"
  },
  description: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: "400"
  }
});

export default StyledText;
