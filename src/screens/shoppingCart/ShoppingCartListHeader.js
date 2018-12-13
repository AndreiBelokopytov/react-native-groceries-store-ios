import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Label from "../../shared/Label";
import ScreenHeader from "../../shared/ScreenHeader";
import StyledText from "../../shared/StyledText";
import pluralize from "../../utils/pluralize";
import { getShoppingCartCounter } from "../../utils/stateSelectors/shoppingCartSelectors";

const headerText = pluralize({
  "0": "",
  "1": "товар",
  "2-4": "товара",
  many: "товаров"
});

class ShoppingCartListHeader extends PureComponent {
  render() {
    const { count } = this.props;
    return (
      <>
        <ScreenHeader>
          <StyledText text="Корзина" variant="title1" />
        </ScreenHeader>
        <View style={styles.root}>
          <Label note text={count + " " + headerText(count)} />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: getShoppingCartCounter(state.profile.shoppingCart)
  };
};

const styles = StyleSheet.create({
  root: {
    marginLeft: 20
  }
});

export default connect(mapStateToProps)(ShoppingCartListHeader);
