import { Set } from "immutable";
import {
  PROFILE_ADD_TO_FAVORITES,
  PROFILE_REMOVE_FROM_FAVORITES,
  PROFILE_UPDATE_SORT_ORDER
} from "../actions/profileActions";
const initialState = {
  favorites: Set(),
  productsSortOrder: "default"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.add(action.payload.productId)
      };
    case PROFILE_REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.delete(action.payload.productId)
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
