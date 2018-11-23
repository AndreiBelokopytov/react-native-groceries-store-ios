import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { removeFromShoppingCart } from "../../actions/profileActions";
import ShoppingCartIcon from "../../shared/icons/ShoppingCartIcon";
import ScreenHeader from "../../shared/ScreenHeader";
import shoppingCartCounter from "./components/shoppingCartCounter";
import tabBarIcon from "../../shared/tabBarIcon";
import { getProductsInCart } from "../../utils/stateSelectors/shoppingCartSelectors";
import ShoppingCartItemSeparator from "./components/ShoppingCartItemSeparator";
import ShoppingCartListFooter from "./components/shoppingCartListFooter";
import ShoppingCartListHeader from "./components/ShoppingCartListHeader";
import ShoppingCartListItem from "./components/ShoppingCartListItem";

const IconWithBadge = shoppingCartCounter(
  tabBarIcon(ShoppingCartIcon, { badge: true })
);
const TabBarIcon = props => {
  return <IconWithBadge {...props} />;
};

class ShoppingCart extends Component {
  static navigationOptions = {
    title: "Корзина",
    tabBarIcon: TabBarIcon
  };
  render() {
    const { products } = this.props;
    return (
      <View style={styles.root}>
        <ScreenHeader title="Корзина" />
        {products.length ? (
          <FlatList
            data={products}
            keyExtractor={this.productKeyExtractor}
            renderItem={this.renderListItem}
            ItemSeparatorComponent={ShoppingCartItemSeparator}
            ListHeaderComponent={ShoppingCartListHeader}
            ListFooterComponent={ShoppingCartListFooter}
            contentContainerStyle={{
              paddingTop: 12
            }}
          />
        ) : (
          <View style={styles.noItemsContent}>
            <Text>Корзина пуста</Text>
          </View>
        )}
      </View>
    );
  }

  productKeyExtractor = item => item.product.id;

  renderListItem = ({ item }) => (
    <ShoppingCartListItem product={item.product} count={item.count} />
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  noItemsContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return {
    products: getProductsInCart(
      state.catalog.products,
      state.profile.shoppingCart
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: productId => dispatch(removeFromShoppingCart(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
