import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { useScreens } from "react-native-screens";
import colors from "./constants/colors";
import { Categories } from "./screens/categories";
import { ProductDetails } from "./screens/productDetails";
import { Products } from "./screens/products";
import Profile from "./screens/profile/index";
import Search from "./screens/search/index";
import { ShoppingCart } from "./screens/shoppingCart";
import { Loading } from "./screens/loading";
import Filter from "./screens/filter/index";
import CategoriesIcon from "./shared/icons/CategoriesIcon";
import tabBarIcon from "./shared/tabBarIcon";

useScreens();

const CatalogDetails = createStackNavigator(
  {
    Categories,
    Products,
    ProductDetails
  },
  {
    initialRouteName: "Categories",
    headerMode: "screen"
  }
);

CatalogDetails.navigationOptions = {
  header: null
};

const Catalog = createStackNavigator(
  {
    Details: CatalogDetails,
    Filter
  },
  {
    initialRouteName: "Details",
    mode: "modal",
    headerMode: "screen"
  }
);

Catalog.navigationOptions = {
  title: "Категории",
  tabBarIcon: tabBarIcon(CategoriesIcon)
};

const Tabs = createBottomTabNavigator(
  {
    Catalog,
    Search,
    ShoppingCart,
    Profile
  },
  {
    initialRouteName: "Catalog",
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.textGray
    }
  }
);

const App = createSwitchNavigator(
  {
    Loading,
    Tabs
  },
  {
    initialRouteName: "Loading"
  }
);

export default createAppContainer(App);
