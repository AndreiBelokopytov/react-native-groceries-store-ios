import { connect } from "react-redux";
import ProductDetails from "./ProductDetails";
import { addToShoppingCart } from "../../actions/profileActions";

const mapStateToProps = state => {
  return {
    selectedCategory: state.catalog.selectedCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productId, categoryId, count) =>
      dispatch(addToShoppingCart(productId, categoryId, count))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
