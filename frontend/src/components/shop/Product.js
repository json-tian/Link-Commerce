import React from "react";
import { Card } from "@shopify/polaris";

function Product({ product }) {
  return (
    <Card sectioned title={product.title}>
      <p>{product.description}</p>
    </Card>
  );
}

export default Product;
