export const PROFILE_ADD_TO_FAVORITES = "PROFILE_ADD_TO_FAVORITES";
export const PROFILE_UPDATE_SORT_ORDER = "PROFILE_UPDATE_SORT_ORDER";
export const PROFILE_REMOVE_FROM_FAVORITES = "PROFILE_REMOVE_FROM_FAVORITES";
export const PROFILE_ADD_TO_SHOPPING_CART = "PROFILE_ADD_TO_SHOPPING_CART";
export const PROFILE_REMOVE_FROM_SHOPPING_CART =
  "PROFILE_REMOVE_FROM_SHOPPING_CART";

export function addToFavorites(productId) {
  return {
    type: PROFILE_ADD_TO_FAVORITES,
    payload: {
      productId
    }
  };
}

export function removeFromFavorites(productId) {
  return {
    type: PROFILE_REMOVE_FROM_FAVORITES,
    payload: {
      productId
    }
  };
}

export function updateSortOrder(sortOrder) {
  return {
    type: PROFILE_UPDATE_SORT_ORDER,
    payload: {
      sortOrder
    }
  };
}

export function addToShoppingCart(productId, categoryId, count) {
  return {
    type: PROFILE_ADD_TO_SHOPPING_CART,
    payload: {
      productId,
      categoryId,
      count
    }
  };
}

export function removeFromShoppingCart(productId) {
  return {
    type: PROFILE_REMOVE_FROM_SHOPPING_CART,
    payload: {
      productId
    }
  };
}
