import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, FlatList } from "react-native";
import ShoppingCartIcon from "../../shared/icons/ShoppingCartIcon";
import ScreenHeader from "../../shared/ScreenHeader";
import StyledText from "../../shared/StyledText";
import shoppingCartCounter from "./shoppingCartCounter";
import tabBarIcon from "../../shared/tabBarIcon";
import ShoppingCartItemSeparator from "./ShoppingCartItemSeparator";
import ShoppingCartListFooter from "./shoppingCartListFooter";
import ShoppingCartListHeader from "./ShoppingCartListHeader";
import ShoppingCartListItem from "./ShoppingCartListItem";

const IconWithBadge = shoppingCartCounter(
  tabBarIcon(ShoppingCartIcon, { badge: true })
);
const TabBarIcon = props => {
  return <IconWithBadge {...props} />;
};

export default class ShoppingCart extends Component {
  render() {
    const { products } = this.props;
    return (
      <SafeAreaView style={styles.root}>
        <ScreenHeader>
          <StyledText text="Корзина" variant="title1" />
        </ScreenHeader>
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
            <StyledText text="Корзина пуста" />
          </View>
        )}
      </SafeAreaView>
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

ShoppingCart.navigationOptions = {
  title: "Корзина",
  tabBarIcon: TabBarIcon
};
