import * as React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

export default class Header extends React.Component {
  render() {
    const { children, style } = this.props;
    return (
      <SafeAreaView style={styles.root}>
        <View style={[styles.wrapper, style]}>{children}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: "absolute"
  },
  wrapper: {
    height: 44,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});
