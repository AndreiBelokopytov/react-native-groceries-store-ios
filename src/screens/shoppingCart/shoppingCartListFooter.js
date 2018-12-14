import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import StyledButton from "../../shared/StyledButton";
import StyledText from "../../shared/StyledText";
import { getShoppingCartSum } from "../../stateSelectors/shoppingCartSelectors";

class ShoppingCartListFooter extends PureComponent {
  render() {
    const { shoppingCartSum, discount, total } = this.props;
    if (total === 0) {
      return null;
    }
    return (
      <View style={styles.root}>
        <View style={styles.orderPrice}>
          <View style={styles.subitem}>
            <StyledText style={styles.note} text="Подытог" />
            <Text style={styles.price}>{shoppingCartSum} ₽</Text>
          </View>
          <View style={[styles.subitem, styles.subitemMargin]}>
            <StyledText style={styles.note} text="Скидка" />
            <Text style={styles.price}> {discount} ₽</Text>
          </View>
          <View style={[styles.subitem, styles.summary]}>
            <Text style={styles.summaryText}>Итог</Text>
            <Text style={[styles.summaryText, styles.summaryPrice]}>
              {total} ₽
            </Text>
          </View>
        </View>
        <View style={styles.btnOrder}>
          <StyledButton large>
            <Text>Оформить</Text>
          </StyledButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20
  },
  orderPrice: {
    marginBottom: 20
  },
  subitem: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  subitemMargin: {
    marginTop: 8
  },
  price: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.primary,
    marginLeft: 8
  },
  summary: {
    marginTop: 12
  },
  summaryText: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "600"
  },
  summaryPrice: {
    color: colors.primary,
    marginLeft: 8
  },
  btnOrder: {
    marginBottom: 24
  },
  note: {
    color: colors.textGray
  }
});

const mapStateToProps = state => {
  const shoppingCartSum = getShoppingCartSum(
    state.profile.shoppingCart,
    state.catalog.products
  );
  const discount = state.profile.discount;
  return {
    shoppingCartSum,
    discount,
    total: shoppingCartSum - discount
  };
};

export default connect(mapStateToProps)(ShoppingCartListFooter);
