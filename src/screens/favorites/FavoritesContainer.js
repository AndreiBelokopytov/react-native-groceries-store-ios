import { connect } from "react-redux";
import { getProductsInFavorites } from "../../utils/stateSelectors/catalogSelectors";
import Favorites from "./Favorites";

const mapStateToProps = state => {
  return {
    favorites: state.profile.favorites,
    products: getProductsInFavorites(
      state.catalog.products,
      state.profile.favorites
    )
  };
};

export default connect(mapStateToProps)(Favorites);
