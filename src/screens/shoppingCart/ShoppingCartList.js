import * as React from "react";
import { Animated, FlatList } from "react-native";
import ShoppingCartItemSeparator from "./ShoppingCartItemSeparator";
import ShoppingCartListItem from "./ShoppingCartListItem";
import ShoppingCartListHeader from "./ShoppingCartListHeader";
import ShoppingCartListFooter from "./shoppingCartListFooter";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class ShoppingCartList extends React.Component {
  static defaultProps = {
    paddingTop: 0
  };

  state = {
    allowVerticalScroll: true
  };
  render() {
    const { products, paddingTop, onScroll } = this.props;

    const { allowVerticalScroll } = this.state;

    return (
      <AnimatedFlatList
        data={products}
        scrollEnabled={allowVerticalScroll}
        keyExtractor={this.productKeyExtractor}
        renderItem={this.renderListItem}
        contentContainerStyle={{
          flex: products && products.length === 0 ? 1 : 0,
          paddingTop: 80,
          paddingBottom: 20
        }}
        scrollIndicatorInsets={{ top: paddingTop }}
        onScroll={onScroll}
        ItemSeparatorComponent={ShoppingCartItemSeparator}
        ListHeaderComponent={ShoppingCartListHeader}
        ListFooterComponent={ShoppingCartListFooter}
      />
    );
  }

  productKeyExtractor = item => item.product.id;

  renderListItem = ({ item: { product, count, categoryId } }) => {
    return (
      <ShoppingCartListItem
        product={product}
        count={count}
        categoryId={categoryId}
        changeCount={this.props.changeCount}
      />
    );
  };
}
