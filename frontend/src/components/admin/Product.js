import React from "react";
import { DeleteMajor, EditMajor } from "@shopify/polaris-icons";
import { Button, ButtonGroup, Card, Icon, Stack } from "@shopify/polaris";

function Product({ product }) {
  return (
    <Card
      title={product.title}
      // sectioned={true}
      // secondaryFooterActions={[
      //   { content: "Delete Product", destructive: true },
      // ]}

      // primaryFooterAction={{ content: "Edit Product" }}
    >
      <Card.Section title="Description">
        {product.description}
        <Stack spacing="loose" vertical>
          <Stack distribution="trailing">
            <ButtonGroup>
              <Button destructive>
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

export default Product;
