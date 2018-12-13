import React, { PureComponent } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SearchIcon from "./icons/SearchIcon";

class SearchInput extends PureComponent {
  render() {
    return (
      <View style={styles.root}>
        <TextInput
          {...this.props}
          placeholderTextColor="#8E8E93"
          style={styles.input}
        />
        <View style={styles.searchIcon}>
          <SearchIcon width={14} height={14} fill="#8E8E93" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 36,
    backgroundColor: "rgba(142, 142, 147, 0.12)",
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 17,
    lineHeight: 22
  },
  searchIcon: {
    position: "absolute",
    left: 11,
    top: 11
  }
});

export default SearchInput;
