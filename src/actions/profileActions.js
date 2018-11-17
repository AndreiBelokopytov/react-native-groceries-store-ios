export const PROFILE_BOOKMARK_PRODUCT = "PROFILE_BOOKMARK_PRODUCT";
export const PROFILE_UPDATE_SORT_ORDER = "PROFILE_UPDATE_SORT_ORDER";

export function bookmarkProduct(productId) {
  return {
    type: PROFILE_BOOKMARK_PRODUCT,
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
