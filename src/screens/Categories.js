import React, { Component } from "react";
import { View } from "react-native";
import CategoriesIcon from "../shared/icons/CategoriesIcon";

class Categories extends Component {
  static navigationOptions = {
    title: "Категории",
    tabBarIcon: CategoriesIcon
  };
  render() {
    return <View />;
  }
}

export default Categories;
