import * as React from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  InteractionManager,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import colors from "../../constants/colors";
import navigationService from "../../utils/navigationService";
import { withCollapsible } from "../../utils/reactNavigationCollapsible";
import ProductItemSeparator from "./ProductItemSeparator";
import ProductListItem from "./ProductListItem";
import ProductsHeader from "./ProductsHeader";
import ProductsListHeader from "./ProductsListHeader";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class Products extends React.Component {
  state = {
    interactionEnded: false,
    allowVerticalScroll: true
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({
        interactionEnded: true
      });
    });
  }

  render() {
    const {
      products,
      collapsible: { paddingHeight, onScroll, scrollY }
    } = this.props;
    const { interactionEnded } = this.state;

    return (
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1 }}>
          {interactionEnded ? (
            <AnimatedFlatList
              style={styles.products}
              data={products}
              keyExtractor={this.productKeyExtractor}
              renderItem={this.renderListItem}
              contentContainerStyle={{
                paddingTop: paddingHeight,
                paddingBottom: 20
              }}
              scrollIndicatorInsets={{ top: paddingHeight }}
              onScroll={onScroll}
              ItemSeparatorComponent={ProductItemSeparator}
              ListHeaderComponent={ProductsListHeader}
              _mustAddThis={scrollY}
            />
          ) : (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={colors.icon} />
            </View>
          )}
        </View>
      </View>
    );
  }

  productKeyExtractor = item => item.id;

  renderListItem = ({ item }) => {
    const { favorites, addToFavorites, removeFromFavorites } = this.props;

    const inFavorites = favorites.has(item.id);
    return (
      <ProductListItem
        product={item}
        onSwipe={this.swipeScrollEvent}
        inFavorites={inFavorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        addToCart={this.addProductToCart}
        openDetails={this.openProductDetails}
      />
    );
  };

  swipeScrollEvent = allowParentScroll => {
    if (this.state.allowVerticalScroll !== allowParentScroll) {
      this.setState({ allowVerticalScroll: allowParentScroll });
    }
  };

  addProductToCart = productId => {
    const { addToCart, selectedCategory: categoryId } = this.props;
    addToCart(productId, categoryId, 1);
  };

  openProductDetails = productId => {
    navigationService.navigate("ProductDetails", {
      productId
    });
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  content: {
    position: "absolute",
    flex: 1
  },
  products: {
    flex: 1
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

Products.navigationOptions = ({ navigation }) => {
  return {
    headerBackTitle: null,
    headerStyle: {
      height: 220
    },
    header: <ProductsHeader navigation={navigation} />
  };
};

export default withCollapsible(Products);
