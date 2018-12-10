import { connect } from "react-redux";
import { searchProducts } from "../../actions/catalogActions";
import Search from "./Search";

const mapStateToProps = state => {
  return {
    searchPopular: state.catalog.searchPopular
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchProducts: search => dispatch(searchProducts(search))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
