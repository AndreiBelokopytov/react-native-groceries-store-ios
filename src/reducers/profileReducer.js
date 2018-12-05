import { Set, Map } from "immutable";
import {
  PROFILE_ADD_TO_FAVORITES,
  PROFILE_ADD_TO_SHOPPING_CART,
  PROFILE_REMOVE_FROM_FAVORITES,
  PROFILE_REMOVE_FROM_SHOPPING_CART,
  PROFILE_UPDATE_SORT_ORDER
} from "../actions/profileActions";
const initialState = {
  favorites: Set(),
  productsSortOrder: "default",
  shoppingCart: Map(),
  discount: 0
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
    case PROFILE_ADD_TO_SHOPPING_CART: {
      const { productId, categoryId, count } = action.payload;
      let updatedCart, _count;
      const productInCart = state.shoppingCart.get(productId);
      if (productInCart) {
        _count = count + productInCart.count;
      } else {
        _count = count;
      }
      if (_count === 0) {
        updatedCart = state.shoppingCart.remove(productId);
      } else {
        updatedCart = state.shoppingCart.set(productId, {
          categoryId,
          count: _count
        });
      }
      return {
        ...state,
        shoppingCart: updatedCart
      };
    }
    case PROFILE_REMOVE_FROM_SHOPPING_CART: {
      const { productId } = action.payload;
      return {
        ...state,
        shoppingCart: state.shoppingCart.remove(productId)
      };
    }

    default:
      return state;
  }
}
