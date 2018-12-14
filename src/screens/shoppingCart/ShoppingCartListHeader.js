import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import colors from "../../constants/colors";
import ScreenHeader from "../../shared/ScreenHeader";
import StyledText from "../../shared/StyledText";
import pluralize from "../../utils/pluralize";
import { getShoppingCartCounter } from "../../stateSelectors/shoppingCartSelectors";

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
        <StyledText
          style={styles.subtitle}
          note
          text={count + " " + headerText(count)}
        />
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
  subtitle: {
    marginTop: 12,
    marginLeft: 20,
    color: colors.textGray
  }
});

export default connect(mapStateToProps)(ShoppingCartListHeader);
