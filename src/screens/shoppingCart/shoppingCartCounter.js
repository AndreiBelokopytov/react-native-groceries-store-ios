import { connect } from "react-redux";
import { getShoppingCartCounter } from "../../stateSelectors/shoppingCartSelectors";

function shoppingCartCounter(icon) {
  return connect(mapStateToProps)(icon);
}
const mapStateToProps = state => {
  return {
    count: getShoppingCartCounter(state.profile.shoppingCart)
  };
};

export default shoppingCartCounter;
