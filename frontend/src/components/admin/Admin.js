import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteApiData, getApiData } from "../../utils/controller";
import React from "react";
import { Products } from "./Products";
import { DisplayText, Page } from "@shopify/polaris";

function Admin() {
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

  return (
    <Page
      breadcrumbs={[{ content: shopData.name, url: "/" + shopData.subpage }]}
      title="Admin Page"
      subtitle={shopData.name}
      compactTitle
    >
      <DisplayText size="extraLarge">Welcome to the Admin Page</DisplayText>
      <DisplayText size="large">Store Details:</DisplayText>
      {/* <h2>Welcome to the Admin page</h2> */}
      {/* <h3>Shop Name: {shopData.name}</h3>
      <h3>Description: {shopData.description}</h3>
      <h3>Subpage: {shopData.subpage}</h3> */}
      <DisplayText size="large">Products in your store:</DisplayText>
      <Products products={products} deleteItem={deleteApiData} />
      <a href={"/" + shopData.subpage}>View the Shop</a>
    </Page>
  );
}

export default Admin;
