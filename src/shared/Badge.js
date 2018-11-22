import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

class Badge extends PureComponent {
  render() {
    const { count } = this.props;
    return (
      <View style={styles.root}>
        <Text style={styles.counter}>{count}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: 21,
    height: 21,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff"
  },
  counter: {
    color: "#fff",
    fontSize: 11
  }
});

export default Badge;
