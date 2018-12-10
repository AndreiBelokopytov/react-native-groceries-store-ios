import { loop, Cmd } from "redux-loop";
import { Map } from "immutable";
import {
  CATALOG_LOAD_CATEGORIES,
  CATALOG_LOAD_CATEGORIES_FAIL,
  CATALOG_LOAD_CATEGORIES_SUCCESS,
  CATALOG_LOAD_PRODUCTS,
  CATALOG_LOAD_PRODUCTS_FAIL,
  CATALOG_LOAD_PRODUCTS_SUCCESS,
  CATALOG_LOAD_SEARCH_HISTORY,
  CATALOG_LOAD_SEARCH_HISTORY_FAIL,
  CATALOG_LOAD_SEARCH_HISTORY_SUCCESS,
  CATALOG_LOAD_SEARCH_POPULAR,
  CATALOG_LOAD_SEARCH_POPULAR_FAIL,
  CATALOG_LOAD_SEARCH_POPULAR_SUCCESS,
  CATALOG_SEARCH_PRODUCTS,
  CATALOG_SEARCH_PRODUCTS_FAIL,
  CATALOG_SEARCH_PRODUCTS_SUCCESS,
  CATALOG_SELECT_CATEGORY,
  loadCategoriesFail,
  loadCategoriesSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  loadSearchHistorySuccess,
  loadSearchPopularFail,
  loadSearchPopularSuccess,
  searchProductsFail,
  searchProductsSuccess
} from "../actions/catalogActions";
import CategoryRecord from "../immutableTypes/CategoryRecord";
import ProductRecord from "../immutableTypes/ProductRecord";
import api from "../utils/api";

const initialState = {
  categories: [],
  selectedCategory: null,
  isLoadingCategories: null,
  loadingCategoriesError: null,
  products: Map(),
  isLoadingProducts: null,
  loadingProductsError: null,
  searchPopular: [],
  isLoadingSearchPopular: null,
  loadingSearchPopularError: null,
  search: "",
  searchHistory: [],
  isLoadingSearchHistory: null,
  loadingSearchHistoryError: null,
  searchResults: [],
  isSearchingProducts: null,
  searchingProductsError: null
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
        categories: action.payload.categories.map(
          item => new CategoryRecord(item)
        )
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
          selectedCategory: category
        },
        state.products.has(category) ? Cmd.none : Cmd.action(loadProducts())
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
      const products = action.payload.products.map(item => ProductRecord(item));
      const productsSet = state.products.set(state.selectedCategory, products);
      return {
        ...state,
        products: productsSet,
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
    case CATALOG_LOAD_SEARCH_POPULAR:
      return loop(
        {
          ...state,
          isLoadingSearchPopular: true,
          loadingSearchPopularError: null
        },
        Cmd.run(api.getSearchPopular, {
          successActionCreator: loadSearchPopularSuccess,
          failActionCreator: loadSearchPopularFail
        })
      );
    case CATALOG_LOAD_SEARCH_POPULAR_SUCCESS:
      return {
        ...state,
        isLoadingSearchPopular: false,
        searchPopular: action.payload.searchRequests
      };
    case CATALOG_LOAD_SEARCH_POPULAR_FAIL:
      return {
        ...state,
        isLoadingSearchPopular: false,
        loadingSearchPopularError: action.payload.error
      };
    case CATALOG_LOAD_SEARCH_HISTORY:
      return loop(
        {
          ...state,
          isLoadingSearchHistory: true,
          loadingSearchHistoryError: null
        },
        Cmd.run(api.getSearchHistory, {
          successActionCreator: loadSearchHistorySuccess,
          failActionCreator: loadSearchPopularFail
        })
      );
    case CATALOG_LOAD_SEARCH_HISTORY_SUCCESS:
      return {
        ...state,
        isLoadingSearchHistory: false,
        searchHistory: action.payload.searchRequests
      };
    case CATALOG_LOAD_SEARCH_HISTORY_FAIL:
      return {
        ...state,
        isLoadingSearchHistory: false,
        loadingSearchHistoryError: action.payload.error
      };
    case CATALOG_SEARCH_PRODUCTS:
      return loop(
        {
          ...state,
          isSearchingProducts: true,
          searchingProductsError: null,
          search: action.payload.search
        },
        Cmd.run(api.searchProducts, {
          args: [action.payload.search],
          successActionCreator: searchProductsSuccess,
          failActionCreator: searchProductsFail
        })
      );
    case CATALOG_SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isSearchingProducts: false,
        searchResults: action.payload.products
      };
    case CATALOG_SEARCH_PRODUCTS_FAIL:
      return {
        ...state,
        isSearchingProducts: false,
        searchingProductsError: action.payload.error
      };
    default:
      return state;
  }
}
