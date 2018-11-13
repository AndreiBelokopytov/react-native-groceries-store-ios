import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import colors from "./src/constants/colors";
import Categories from "./src/screens/categories/index";
import Home from "./src/screens/home/index";
import Profile from "./src/screens/profile/index";
import Search from "./src/screens/search/index";
import ShoppingCart from "./src/screens/shoppingCart/index";

const Navigator = createBottomTabNavigator(
  {
    Home,
    Categories: Categories,
    Search,
    ShoppingCart,
    Profile
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.textGray
    }
  }
);

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}
