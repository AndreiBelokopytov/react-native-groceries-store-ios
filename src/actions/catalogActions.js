export const CATALOG_LOAD_CATEGORIES = "CATALOG_LOAD_CATEGORIES";
export const CATALOG_LOAD_CATEGORIES_SUCCESS =
  "CATALOG_LOAD_CATEGORIES_SUCCESS";
export const CATALOG_LOAD_CATEGORIES_FAIL = "CATALOG_LOAD_CATEGORIES_FAIL";
export const CATALOG_SELECT_CATEGORY = "CATALOG_SELECT_CATEGORY";
export const CATALOG_LOAD_PRODUCTS = "CATALOG_LOAD_PRODUCTS";
export const CATALOG_LOAD_PRODUCTS_SUCCESS = "CATALOG_LOAD_PRODUCTS_SUCCESS";
export const CATALOG_LOAD_PRODUCTS_FAIL = "CATALOG_LOAD_PRODUCTS_FAIL";

export function loadCategories() {
  return {
    type: CATALOG_LOAD_CATEGORIES
  };
}

export function loadCategoriesSuccess({ categories, total }) {
  return {
    type: CATALOG_LOAD_CATEGORIES_SUCCESS,
    payload: {
      categories,
      total
    }
  };
}

export function loadCategoriesFail({ message }) {
  return {
    type: CATALOG_LOAD_CATEGORIES_FAIL,
    payload: {
      error: message
    }
  };
}

export function selectCategory(categoryId) {
  return {
    type: CATALOG_SELECT_CATEGORY,
    payload: {
      categoryId
    }
  };
}

export function loadProducts() {
  return {
    type: CATALOG_LOAD_PRODUCTS
  };
}

export function loadProductsSuccess({ products }) {
  return {
    type: CATALOG_LOAD_PRODUCTS_SUCCESS,
    payload: {
      products
    }
  };
}

export function loadProductsFail({ message }) {
  return {
    type: CATALOG_LOAD_PRODUCTS_FAIL,
    payload: {
      error: message
    }
  };
}
