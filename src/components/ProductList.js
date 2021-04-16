import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    );
  }
}

export default ProductList;
