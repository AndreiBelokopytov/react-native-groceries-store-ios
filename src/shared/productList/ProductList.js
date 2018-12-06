import * as React from "react";
import { Animated, FlatList } from "react-native";
import navigationService from "../../utils/navigationService";
import ProductListSeparator from "./ProductListSeparator";
import ProductListItem from "./ProductListItem";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ProductList extends React.Component {
  static defaultProps = {
    paddingTop: 0
  };

  state = {
    allowVerticalScroll: true
  };

  render() {
    const {
      products,
      paddingTop,
      onScroll,
      ListHeaderComponent,
      ListEmptyComponent
    } = this.props;

    const { allowVerticalScroll } = this.state;

    return (
      <AnimatedFlatList
        data={products}
        scrollEnabled={allowVerticalScroll}
        keyExtractor={this.productKeyExtractor}
        renderItem={this.renderListItem}
        contentContainerStyle={{
          flex: products && products.length === 0 ? 1 : 0,
          paddingTop,
          paddingBottom: 20
        }}
        scrollIndicatorInsets={{ top: paddingTop }}
        onScroll={onScroll}
        ItemSeparatorComponent={ProductListSeparator}
        ListHeaderComponent={ListHeaderComponent}
        ListEmptyComponent={ListEmptyComponent}
      />
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
    const { products } = this.props;
    const product = products.find(item => item.id === productId);
    navigationService.navigate("ProductDetails", {
      product
    });
  };
}

export default ProductList;
