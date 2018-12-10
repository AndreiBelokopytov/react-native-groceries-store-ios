import { connect } from "react-redux";
import SearchResults from "./SearchResults";

const mapStateToProps = state => {
  return {
    products: state.catalog.searchResults
  };
};

export default connect(mapStateToProps)(SearchResults);
