import React from "react";
import { Card } from "@shopify/polaris";
import GooglePayButton from "@google-pay/button-react";
import {
  baseRequest,
  tokenizationSpecification,
  allowedCardNetworks,
  allowedCardAuthMethods,
  baseCardPaymentMethod,
  cardPaymentMethod,
} from "../../utils/pay";

function Product({ product }) {
  return (
    <Card
      title={product.title}
    >
      <Card.Section>
        <p>{product.description}</p>
      </Card.Section>
      <Card.Section title="Price">
        <Card.Subsection>
          <p>{product.price}</p>
        </Card.Subsection>
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [cardPaymentMethod],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: String(product.price),
              currencyCode: "CAD",
              countryCode: "CA",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </Card.Section>
    </Card>
  );
}

export default Product;
