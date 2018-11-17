import { Set } from "immutable";
import {
  PROFILE_BOOKMARK_PRODUCT,
  PROFILE_UPDATE_SORT_ORDER
} from "../actions/profileActions";
const initialState = {
  bookmarkedProducts: Set(),
  productsSortOrder: "default"
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
    case PROFILE_UPDATE_SORT_ORDER:
      return {
        ...state,
        productsSortOrder: action.payload.sortOrder
      };
    default:
      return state;
  }
}
