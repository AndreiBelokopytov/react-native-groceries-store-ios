import connect from "react-redux/es/connect/connect";
import {
  loadCategories,
  loadSearchHistory,
  loadSearchPopular
} from "../../actions/catalogActions";
import Loading from "./Loading";

const mapStateToProps = state => {
  return {
    isLoadingData:
      state.catalog.isLoadingCategories ||
      state.catalog.isLoadingSearchPopular ||
      state.catalog.isLoadingSearchHistory,
    loadingError:
      state.catalog.loadingCategoriesError ||
      state.catalog.loadingSearchPopularError ||
      state.catalog.loadingSearchHistoryError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCategories: () => dispatch(loadCategories()),
    loadSearchPopular: () => dispatch(loadSearchPopular()),
    loadSearchHistory: () => dispatch(loadSearchHistory())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
