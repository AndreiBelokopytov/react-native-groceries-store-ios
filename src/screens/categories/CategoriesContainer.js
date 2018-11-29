import connect from "react-redux/es/connect/connect";
import { selectCategory } from "../../actions/catalogActions";
import Categories from "./Categories";

const mapStateToProps = state => {
  return {
    categories: state.catalog.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectCategory: categoryId => dispatch(selectCategory(categoryId))
  };
};

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);

CategoriesContainer.navigationOptions = {
  header: null,
  headerBackTitle: null
};

export default CategoriesContainer;
