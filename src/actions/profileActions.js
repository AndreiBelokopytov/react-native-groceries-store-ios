export const PROFILE_BOOKMARK_PRODUCT = "PROFILE_BOOKMARK_PRODUCT";

export function bookmarkProduct(productId) {
  return {
    type: PROFILE_BOOKMARK_PRODUCT,
    payload: {
      productId
    }
  };
}
