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
import { Favorites } from "./screens/favorites";
import { ProductDetails } from "./screens/productDetails";
import { Products } from "./screens/products";
import { Profile } from "./screens/profile";
import { Search } from "./screens/search";
import { SearchResults } from "./screens/searchResults";
import { ShoppingCart } from "./screens/shoppingCart";
import { Loading } from "./screens/loading";
import Filter from "./screens/filter/index";
import CategoriesIcon from "./shared/icons/CategoriesIcon";
import ProfileIcon from "./shared/icons/ProfileIcon";
import SearchIcon from "./shared/icons/SearchIcon";
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

const Catalog = createStackNavigator({
  Details: CatalogDetails,
  Filter
});

Catalog.navigationOptions = {
  title: "Категории",
  tabBarIcon: tabBarIcon(CategoriesIcon)
};

const ProfileTab = createStackNavigator(
  {
    Profile,
    Favorites,
    ProductDetails
  },
  {
    defaultNavigationOptions: {
      headerTintColor: colors.primary,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        paddingLeft: 12
      },
      headerRightContainerStyle: {
        paddingRight: 12
      },
      headerTitleStyle: {
        color: colors.black
      }
    }
  }
);

ProfileTab.navigationOptions = {
  title: "Профиль",
  tabBarIcon: tabBarIcon(ProfileIcon)
};

const SearchTab = createStackNavigator(
  {
    Search,
    SearchResults
  },
  {
    defaultNavigationOptions: {
      headerTintColor: colors.primary,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        paddingLeft: 12
      },
      headerRightContainerStyle: {
        paddingRight: 12
      },
      headerTitleStyle: {
        color: colors.black
      }
    }
  }
);

SearchTab.navigationOptions = {
  title: "Поиск",
  tabBarIcon: tabBarIcon(SearchIcon)
};

const Tabs = createBottomTabNavigator(
  {
    Catalog,
    SearchTab,
    ShoppingCart,
    ProfileTab
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
