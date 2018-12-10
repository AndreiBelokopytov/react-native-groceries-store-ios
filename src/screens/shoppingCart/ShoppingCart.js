import React, { Component } from "react";
import { View, StyleSheet, Text, Animated, Button } from "react-native";
import ShoppingCartIcon from "../../shared/icons/ShoppingCartIcon";
import ScreenHeader from "../../shared/ScreenHeader";

import { Header } from "react-navigation";
import StyledText from "../../shared/StyledText";
import shoppingCartCounter from "./shoppingCartCounter";
import tabBarIcon from "../../shared/tabBarIcon";
import colors from "../../constants/colors";
import CollapsibleToolbar from "../../shared/CollapsibleToolbar";
import ShoppingCartList from "./ShoppingCartList";

const IconWithBadge = shoppingCartCounter(
  tabBarIcon(ShoppingCartIcon, { badge: true })
);
const TabBarIcon = props => {
  return <IconWithBadge {...props} />;
};
const HEADER_HEIGHT = Header.HEIGHT;

export default class ShoppingCart extends Component {
  static scrollY = new Animated.Value(0);
  static toolbarHeight = 140;
  state = {
    allowVerticalScroll: true
  };
  componentDidMount() {
    ShoppingCart.scrollY.setValue(0);
  }

  renderToolbarTitle = ({ style: titleStyle, scrollY, expandedHeight }) => {
    return (
      <Animated.View
        style={[
          titleStyle,
          styles.title,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, expandedHeight],
                  outputRange: [0, -expandedHeight],
                  extrapolate: "clamp"
                })
              }
            ]
          }
        ]}
      >
        <ScreenHeader title="Корзина" />
      </Animated.View>
    );
  };
  render() {
    const { products } = this.props;
    return (
      <View style={styles.root}>
        <CollapsibleToolbar
          expandedHeight={ShoppingCart.toolbarHeight}
          headerHeight={HEADER_HEIGHT}
          scrollY={ShoppingCart.scrollY}
          overlayColor={colors.white}
          renderTitle={this.renderToolbarTitle}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.titleMini}>
            <StyledText color={colors.black} text="Корзина" />
          </View>
          {products.length ? (
            <ShoppingCartList
              products={products}
              onScroll={this.onListScroll}
              paddingTop={140}
              changeCount={this.props.changeCount}
            />
          ) : (
            <View style={styles.noItemsContent}>
              <StyledText text="Корзина пуста" />
            </View>
          )}
        </View>
      </View>
    );
  }
  onListScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: ShoppingCart.scrollY } } }],
    {
      userNativeDriver: true
    }
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
  },
  title: {
    width: "100%",
    height: "100%"
  },
  titleMini: {
    justifyContent: "flex-end",
    height: HEADER_HEIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.hairlineBorder,
    paddingHorizontal: 20,
    paddingBottom: 9,
    zIndex: -1
  }
});

ShoppingCart.navigationOptions = {
  title: "Корзина",
  tabBarIcon: TabBarIcon
};
