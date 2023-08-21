import React from 'react';
import Product from "./Product/Product";
import "./Products.scss";
const Products = () => {
  return (
    <div className="products-container">
        <div className="sec-heading"><a id="style-2" data-replace="Tech"><span>Products</span></a></div>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />

        </div>
    </div>
  )
}

export default Products
