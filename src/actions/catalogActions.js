export const CATALOG_LOAD_CATEGORIES = "CATALOG_LOAD_CATEGORIES";
export const CATALOG_LOAD_CATEGORIES_SUCCESS =
  "CATALOG_LOAD_CATEGORIES_SUCCESS";
export const CATALOG_LOAD_CATEGORIES_FAIL = "CATALOG_LOAD_CATEGORIES_FAIL";

export function loadCategories() {
  return {
    type: CATALOG_LOAD_CATEGORIES
  };
}

export function loadCategoriesSuccess(data) {
  return {
    type: CATALOG_LOAD_CATEGORIES_SUCCESS,
    payload: {
      categories: data.categories,
      total: data.total
    }
  };
}

export function loadCategoriesFail(error) {
  return {
    type: CATALOG_LOAD_CATEGORIES_FAIL,
    payload: {
      error
    }
  };
}
