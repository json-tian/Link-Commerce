import React from "react";
import { Product } from "./Product";

export function Products(props) {
  const { products, deleteItem } = props;

  return (
    <div className="Products">
      {products.length === 0 ? (
        <h2>No products added yet, try adding some.</h2>
      ) : (
        products.map((product) => {
           return <Product
            key={product.id}
            product={product}
            deleteThisProduct={() => deleteItem("products/" + product.id)}/>;
        })
      )}
    </div>
  );
}
