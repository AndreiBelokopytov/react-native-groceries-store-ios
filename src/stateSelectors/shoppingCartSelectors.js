import memoizeOne from "memoize-one";

let getProductsInCart = (products, shoppingCart) => {
  return shoppingCart.toArray().map(([productId, { count, categoryId }]) => {
    const productsSet = products.get(categoryId);
    const product = productsSet.find(item => item.id === productId);
    return {
      product,
      count,
      categoryId
    };
  });
};

let getShoppingCartCounter = shoppingCart => {
  return shoppingCart.reduce((reduction, { count }) => {
    return reduction + count;
  }, 0);
};

let getShoppingCartSum = (shoppingCart, products) => {
  return shoppingCart.reduce((reduction, { count, categoryId }, productId) => {
    const productsSet = products.get(categoryId);
    const product = productsSet.find(item => item.id === productId);
    return reduction + product.price * count;
  }, 0);
};

getProductsInCart = memoizeOne(getProductsInCart);
getShoppingCartCounter = memoizeOne(getShoppingCartCounter);
getShoppingCartSum = memoizeOne(getShoppingCartSum);

export { getProductsInCart, getShoppingCartCounter, getShoppingCartSum };
