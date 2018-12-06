import memoizeOne from "memoize-one";

let getProductsInFavorites = (products, favorites) => {
  return products.toArray().reduce((accumulator, [categoryId, products]) => {
    products.forEach(product => {
      if (favorites.get(product.id)) {
        accumulator.push(product);
      }
    });
    return accumulator;
  }, []);
};

// getProductsInFavorites = memoizeOne(getProductsInFavorites);

export { getProductsInFavorites };
