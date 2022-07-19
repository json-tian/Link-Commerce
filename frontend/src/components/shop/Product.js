import React from "react";
import { Card } from "@shopify/polaris";

function Product({ product }) {
  return (
    <Card title={product.title}
    secondaryFooterActions = {[{content:"image", url:product.image}]}
    primaryFooterAction = {{content: "Add to cart"}}>
      <Card.Section>
        <p>{product.description}</p>
      </Card.Section>
      <Card.Section title="Price">
        <Card.Subsection>
          <p>{product.price}</p>
        </Card.Subsection>
      </Card.Section>
    </Card>
  );

}

export default Product;
