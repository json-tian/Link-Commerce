import React from "react";

function Product({product}) {

  return (
    <div key={product.id}>
    <h2>Title: {product.title}</h2>
    <h2>description: {product.description}</h2>
  </div>
  );
}

export default Product;
