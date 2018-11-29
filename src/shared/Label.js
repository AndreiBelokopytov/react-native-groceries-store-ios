import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

class Label extends Component {
  render() {
    const { note } = this.props;
    let modifierStyles = emptyStyles;
    if (note) {
      modifierStyles = noteStyles;
    }
    return (
      <View>
        <Text style={[defaultStyles.text, modifierStyles.text]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const emptyStyles = StyleSheet.create({});

const defaultStyles = StyleSheet.create({
  text: {
    fontSize: 13,
    lineHeight: 16,
    color: "#000"
  }
});

const noteStyles = StyleSheet.create({
  text: {
    color: colors.textGray
  }
});

export default Label;
