import { loop, Cmd } from "redux-loop";
import {
  CATALOG_LOAD_CATEGORIES,
  CATALOG_LOAD_CATEGORIES_FAIL,
  CATALOG_LOAD_CATEGORIES_SUCCESS,
  CATALOG_LOAD_PRODUCTS,
  CATALOG_LOAD_PRODUCTS_FAIL,
  CATALOG_LOAD_PRODUCTS_SUCCESS,
  CATALOG_SELECT_CATEGORY,
  loadCategoriesFail,
  loadCategoriesSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess
} from "../actions/catalogActions";
import api from "../utils/api";

const initialState = {
  categories: [],
  selectedCategory: null,
  isLoadingCategories: null,
  loadingCategoriesError: null,
  products: [],
  isLoadingProducts: null,
  loadingProductsError: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATALOG_LOAD_CATEGORIES:
      return loop(
        {
          ...state,
          isLoadingCategories: true,
          loadingCategoriesError: null
        },
        Cmd.run(api.getCategories, {
          successActionCreator: loadCategoriesSuccess,
          failActionCreator: loadCategoriesFail
        })
      );
    case CATALOG_LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoadingCategories: false,
        categories: action.payload.categories
      };
    case CATALOG_LOAD_CATEGORIES_FAIL:
      return {
        ...state,
        isLoadingCategories: false,
        loadingCategoriesError: action.payload.error
      };
    case CATALOG_SELECT_CATEGORY: {
      const { categoryId: category } = action.payload;

      return loop(
        {
          ...state,
          products: [],
          selectedCategory: category
        },
        Cmd.action(loadProducts())
      );
    }
    case CATALOG_LOAD_PRODUCTS: {
      return loop(
        {
          ...state,
          isLoadingProducts: false,
          loadingProductsError: null
        },
        Cmd.run(api.getProducts, {
          args: [state.selectedCategory],
          successActionCreator: loadProductsSuccess,
          failActionCreator: loadProductsFail
        })
      );
    }
    case CATALOG_LOAD_PRODUCTS_SUCCESS: {
      const { products } = action.payload;
      return {
        ...state,
        products,
        isLoadingProducts: false,
        loadingProductsError: null
      };
    }
    case CATALOG_LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        isLoadingProducts: false,
        loadingProductsError: action.payload.error
      };
    default:
      return state;
  }
}
