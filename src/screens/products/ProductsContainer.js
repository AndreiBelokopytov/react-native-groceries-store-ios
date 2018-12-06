import * as React from "react";
import connect from "react-redux/es/connect/connect";
import Products from "./Products";

const mapStateToProps = state => {
  return {
    products: state.catalog.products.get(state.catalog.selectedCategory)
  };
};

export default connect(mapStateToProps)(Products);
