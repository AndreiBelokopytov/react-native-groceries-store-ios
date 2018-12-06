import * as React from "react";
import { connect } from "react-redux";
import {
  addToFavorites,
  addToShoppingCart,
  removeFromFavorites
} from "../../actions/profileActions";
import ProductList from "./ProductList";

const mapStateToProps = state => {
  return {
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
)(ProductList);
