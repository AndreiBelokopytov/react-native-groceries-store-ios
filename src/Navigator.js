import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { useScreens } from "react-native-screens";
import colors from "./constants/colors";
import Categories from "./screens/categories/index";
import Home from "./screens/home/index";
import Products from "./screens/products";
import Profile from "./screens/profile/index";
import Search from "./screens/search/index";
import ShoppingCart from "./screens/shoppingCart/index";
import Loading from "./screens/loading/index";

useScreens();

const { title, tabBarIcon } = Categories.navigationOptions;

const Catalog = createStackNavigator(
  {
    Categories,
    Products
  },
  {
    mode: "modal",
    initialRouteName: "Categories",
    headerMode: "screen",
    navigationOptions: {
      headerLeftContainerStyle: {
        marginLeft: 11
      }
    }
  }
);

Catalog.navigationOptions = {
  title,
  tabBarIcon
};

const Tabs = createBottomTabNavigator(
  {
    Home,
    Catalog,
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
