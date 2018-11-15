import React, { PureComponent } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import FilterIcon from "./icons/FilterIcon";
import SearchIcon from "./icons/SearchIcon";

class SearchInput extends PureComponent {
  render() {
    const { onOpenFilter, ...rest } = this.props;
    return (
      <View style={styles.root}>
        <TextInput
          {...rest}
          placeholderTextColor="#8E8E93"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.filterIcon}
          activeOpacity={0.4}
          onPress={onOpenFilter}
        >
          <FilterIcon width={24} height={20} fill="#3C4249" fillOpacity={0.5} />
        </TouchableOpacity>
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
  filterIcon: {
    marginLeft: 16
  },
  searchIcon: {
    position: "absolute",
    left: 11,
    top: 11
  }
});

export default SearchInput;
