import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  FlatList,
  InteractionManager,
  ActivityIndicator,
  Animated,
  StatusBar
} from "react-native";
import {
  addToFavorites,
  addToShoppingCart,
  removeFromFavorites
} from "../../actions/profileActions";
import colors from "../../constants/colors";
import collapsibleHeader from "../../shared/collapsibleHeader";
import navigationService from "../../utils/navigationService";
import ProductItemSeparator from "./components/ProductItemSeparator";
import ProductListItem from "./components/ProductListItem";
import ProductsHero from "./components/ProductsHero";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class Products extends Component {
  static navigationOptions = {
    title: "Категории",
    headerBackTitle: null
  };

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
    const { products, scrollY, collapsibleHeight } = this.props;

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
                paddingTop: collapsibleHeight,
                paddingBottom: 16
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                {
                  userNativeDriver: true
                }
              )}
              ItemSeparatorComponent={ProductItemSeparator}
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
    const { addToCart } = this.props;
    const { category } = this.state;
    addToCart(productId, category.id, 1);
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
  header: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%"
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

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    categories: state.catalog.categories,
    favorites: state.profile.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: productId => dispatch(addToFavorites(productId)),
    removeFromFavorites: productId => dispatch(removeFromFavorites(productId)),
    addToCart: (productId, categoryId, count) =>
      dispatch(addToShoppingCart(productId, categoryId, count))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  collapsibleHeader(Products, {
    HeroComponent: ProductsHero,
    accentColor: "#fff",
    tintColor: colors.primary,
    backgroundColor: "#fff"
  })
);
