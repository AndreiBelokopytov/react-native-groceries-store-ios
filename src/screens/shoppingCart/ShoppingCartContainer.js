import connect from "react-redux/es/connect/connect";
import {
  removeFromShoppingCart,
  addToShoppingCart
} from "../../actions/profileActions";
import { getProductsInCart } from "../../utils/stateSelectors/shoppingCartSelectors";
import ShoppingCart from "./ShoppingCart";

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
    removeFromCart: productId => dispatch(removeFromShoppingCart(productId)),
    changeCount: (productId, categoryId, count) =>
      dispatch(addToShoppingCart(productId, categoryId, count))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);
