import React, { Component } from "react";
import { View } from "react-native";
import SearchIcon from "../../shared/icons/SearchIcon";
import tabBarIcon from "../../shared/tabBarIcon";

class Search extends Component {
  static navigationOptions = {
    title: "Поиск",
    tabBarIcon: tabBarIcon(SearchIcon)
  };
  render() {
    return <View />;
  }
}

export default Search;
