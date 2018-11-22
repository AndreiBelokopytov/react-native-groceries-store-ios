import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import colors from "../constants/colors";

class TextEdit extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        style={styles.input}
        placeholderTextColor={colors.textGray}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.border,
    fontSize: 17
  }
});

export default TextEdit;
