import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import colors from "./constants/colors";
import Categories from "./screens/categories/index";
import Home from "./screens/home/index";
import Profile from "./screens/profile/index";
import Search from "./screens/search/index";
import ShoppingCart from "./screens/shoppingCart/index";
import Loading from "./screens/loading/index";

const Tabs = createBottomTabNavigator(
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

export default createSwitchNavigator(
  {
    Loading,
    Tabs
  },
  {
    initialRouteName: "Loading"
  }
);
