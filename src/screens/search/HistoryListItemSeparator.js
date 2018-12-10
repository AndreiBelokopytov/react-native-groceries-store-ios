import * as React from "react";
import { View, StyleSheet } from "react-native";

class HistoryListItemSeparator extends React.Component {
  render() {
    return <View style={styles.root} />;
  }
}

const styles = StyleSheet.create({
  root: {
    width: 6
  }
});

export default HistoryListItemSeparator;
