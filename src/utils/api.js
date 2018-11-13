import { API_URL } from "react-native-dotenv";

function handleResponse(response) {
  return response.json();
}

async function getCategories() {
  return fetch(API_URL + "/categories").then(handleResponse);
}

export default {
  getCategories
};
