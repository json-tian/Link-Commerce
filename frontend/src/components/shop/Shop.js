import { useEffect, useState, useCallback, useRef } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { getApiData } from "../../utils/controller";
import NotFound from "../../NotFound";
import React from "react";
import { DisplayText, Frame, Layout, Page, Stack } from "@shopify/polaris";

function Shop() {
  let { shop } = useParams();
  const [shopData, setShopData] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getData() {
      getApiData("shops/?subpage=" + shop).then((shopData) => {
        setShopData(shopData[0]);
      });
    }
    return getData();
  }, [shop]);

  useEffect(() => {
    function getData() {
      getApiData("shops/" + shopData.id + "/products").then((products) => {
        setProducts(products);
      });
    }
    return getData();
  }, [shopData]);

  return shopData !== {} ? (
    <Frame>
      <Page title={shopData.name}>
        <Layout>
          <Layout.Section>
            <Stack vertical>
              <DisplayText size="extraLarge">Products</DisplayText>
              {products.map((product) => {
                return <Product product={product} />;
              })}
            </Stack>
          </Layout.Section>
        </Layout>
      </Page>
    </Frame>
  ) : (
    <NotFound />
  );
}

export default Shop;
