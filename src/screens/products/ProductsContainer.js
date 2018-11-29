import * as React from "react";
import connect from "react-redux/es/connect/connect";
import {
  addToFavorites,
  addToShoppingCart,
  removeFromFavorites
} from "../../actions/profileActions";
import Products from "./Products";

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    favorites: state.profile.favorites,
    selectedCategory: state.catalog.selectedCategory
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
)(Products);
