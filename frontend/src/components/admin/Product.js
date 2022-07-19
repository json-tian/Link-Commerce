import React from "react";
import { DeleteMajor, EditMajor } from "@shopify/polaris-icons";
import {
  Button,
  ButtonGroup,
  Card,
  DisplayText,
  Icon,
  Stack,
} from "@shopify/polaris";

export function Product(props) {
  const { product, deleteThisProduct } = props;

  return (
    <Card title={product.title}>
      <Stack></Stack>
      <Card.Section title="Description">
        {product.description}
        <DisplayText size="small">${product.price}</DisplayText>
        <p>Quantity: {product.quantity}</p>
        <Stack spacing="loose" vertical>
          <Stack distribution="trailing">
            <ButtonGroup>
              <Button destructive onClick={deleteThisProduct}>
                <Icon source={DeleteMajor} color="base" />
                {/* Delete Product */}
              </Button>
              <Button primary>
                <Icon source={EditMajor} color="base" />
                {/* Edit Product */}
              </Button>
            </ButtonGroup>
          </Stack>
        </Stack>
      </Card.Section>
    </Card>
  );
}
