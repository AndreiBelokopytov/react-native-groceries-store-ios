import { connect } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites
} from "../../../actions/profileActions";
import ProductDetailsHeaderRight from "./ProductDetailsHeaderRight";

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory),
    favorites: state.profile.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: productId => dispatch(addToFavorites(productId)),
    removeFromFavorites: productId => dispatch(removeFromFavorites(productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsHeaderRight);
