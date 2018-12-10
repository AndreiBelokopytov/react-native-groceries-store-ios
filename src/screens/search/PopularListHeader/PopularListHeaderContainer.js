import { connect } from "react-redux";
import { searchProducts } from "../../../actions/catalogActions";
import PopularListHeader from "./PopularListHeader";

const mapStateToProps = state => {
  return {
    searchHistory: state.catalog.searchHistory
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
)(PopularListHeader);
