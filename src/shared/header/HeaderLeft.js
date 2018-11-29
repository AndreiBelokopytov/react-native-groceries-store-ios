import * as React from "react";
import { View, StyleSheet } from "react-native";

export default class HeaderLeft extends React.PureComponent {
  render() {
    const { children } = this.props;
    return <View style={styles.root}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
});
