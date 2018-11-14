import { loop, Cmd } from "redux-loop";
import {
  CATALOG_LOAD_CATEGORIES,
  CATALOG_LOAD_CATEGORIES_FAIL,
  CATALOG_LOAD_CATEGORIES_SUCCESS,
  loadCategoriesFail,
  loadCategoriesSuccess
} from "../actions/catalogActions";
import api from "../utils/api";

const initialState = {
  categories: [],
  isLoadingCategories: null,
  loadingCategoriesError: null
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
    default:
      return state;
  }
}
