import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import colors from "./src/constants/colors";
import Categories from "./src/screens/Categories";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import Search from "./src/screens/Search";
import ShoppingCart from "./src/screens/ShoppingCart";

const Navigator = createBottomTabNavigator(
  {
    Home,
    Categories,
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
