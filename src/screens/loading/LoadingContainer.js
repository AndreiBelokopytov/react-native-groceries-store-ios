import connect from "react-redux/es/connect/connect";
import { loadCategories } from "../../actions/catalogActions";
import Loading from "./Loading";

const mapStateToProps = state => {
  return {
    isLoadingData: state.catalog.isLoadingCategories,
    loadingError: state.catalog.loadingCategoriesError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCategories: () => dispatch(loadCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading);
