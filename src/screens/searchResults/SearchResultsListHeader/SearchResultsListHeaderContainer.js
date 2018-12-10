import { connect } from "react-redux";
import SearchResultsListHeader from "./SearchResultsListHeader";

const mapStateToProps = state => {
  return {
    searchResults: state.catalog.searchResults,
    search: state.catalog.search
  };
};

export default connect(mapStateToProps)(SearchResultsListHeader);
