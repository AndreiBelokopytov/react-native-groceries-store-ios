import { API_URL } from "react-native-dotenv";
import qs from "querystring";

function handleResponse(response) {
  if (response.status >= 400) {
    throw new Error(
      `Request failed to ${response.url}, status: ${
        response.statusText
      }, code: ${response.status}`
    );
  }
  return response.json();
}

async function getCategories() {
  return fetch(API_URL + "/categories").then(handleResponse);
}

async function getProducts(category) {
  let params = qs.stringify({
    category
  });
  params = "?" + params;
  return fetch(API_URL + "/products" + params).then(handleResponse);
}

async function getSearchPopular() {
  return fetch(API_URL + "/search_popular").then(handleResponse);
}

async function getSearchHistory() {
  return fetch(API_URL + "/search_history").then(handleResponse);
}

async function searchProducts(search) {
  let params = qs.stringify({
    search
  });
  params = "?" + params;
  return fetch(API_URL + "/products" + params).then(handleResponse);
}

export default {
  getCategories,
  getProducts,
  searchProducts,
  getSearchPopular,
  getSearchHistory
};
