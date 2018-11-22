import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

class Label extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.textGray
  }
});

export default Label;
