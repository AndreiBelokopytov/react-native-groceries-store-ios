import * as React from "react";
import { View, StyleSheet } from "react-native";

export default class HeaderBody extends React.Component {
  render() {
    const { children } = this.props;
    return <View style={styles.root}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});
