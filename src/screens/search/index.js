import React, { Component } from "react";
import { View } from "react-native";
import SearchIcon from "./components/SearchIcon";

class Search extends Component {
  static navigationOptions = {
    title: "Поиск",
    tabBarIcon: SearchIcon
  };
  render() {
    return <View />;
  }
}

export default Search;
