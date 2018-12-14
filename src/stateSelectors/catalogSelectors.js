import memoizeOne from "memoize-one";

let getProductsInFavorites = (products, favorites) => {
  const productsInFavorites = products.reduce((accumulator, productsSubset) => {
    productsSubset.forEach(product => {
      if (favorites.get(product.id) && !accumulator.has(product.id)) {
        accumulator.set(product.id, product);
      }
    });
    return accumulator;
  }, new Map());
  return [...productsInFavorites.values()];
};

getProductsInFavorites = memoizeOne(getProductsInFavorites);

export { getProductsInFavorites };
