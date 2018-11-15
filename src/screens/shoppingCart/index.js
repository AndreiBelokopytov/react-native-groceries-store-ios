import React, { Component } from "react";
import { View } from "react-native";
import ShoppingCartIcon from "../../shared/icons/ShoppingCartIcon";
import tabBarIcon from "../../shared/TabBarIcon";

class ShoppingCart extends Component {
  static navigationOptions = {
    title: "Корзина",
    tabBarIcon: tabBarIcon(ShoppingCartIcon)
  };
  render() {
    return <View />;
  }
}

export default ShoppingCart;
