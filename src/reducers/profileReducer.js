import { Set } from "immutable";
import { PROFILE_BOOKMARK_PRODUCT } from "../actions/profileActions";
const initialState = {
  bookmarkedProducts: Set()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_BOOKMARK_PRODUCT:
      return {
        ...state,
        bookmarkedProducts: state.bookmarkedProducts.add(
          action.payload.productId
        )
      };
    default:
      return state;
  }
}
