import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { deleteApiData, getApiData } from "../../utils/controller";
import React from "react";
import { Products } from "./Products";
import { DisplayText, Page, PageActions, TextField } from "@shopify/polaris";

function Admin() {
  let { shop } = useParams();
  const [shopData, setShopData] = useState({});
  const [products, setProducts] = useState([]);

  // const [value, setValue] = useState("");
  console.log("hello");
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [shopSubpage, setShopSubpage] = useState("");
  // const [shopName, setShopName] = useState(shopData.name);
  // const [shopDescription, setShopDescription] = useState(shopData.description);
  // const [shopSubpage, setShopSubpage] = useState(shopData.subpage);

  // const handleDetailsChange = useCallback((newValue) => setValue(newValue), []);
  const handleDetailsChange = (setValue) => useCallback((newValue) => setValue(newValue), []);

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
      <TextField
        label="Shop Name"
        value={shopName}
        // value={shopData.name}
        onChange={handleDetailsChange(setShopName)}
        // onChange={handleDetailsChange}
        autoComplete="off"
      />
      <TextField
        label="Shop Description"
        value={shopDescription}
        // value={shopData.description}
        onChange={handleDetailsChange(setShopDescription)}
        // onChange={handleDetailsChange}
        autoComplete="off"
      />
      <TextField
        label="Shop Subpage"
        value={shopSubpage}
        // value={shopData.subpage}
        onChange={handleDetailsChange(setShopSubpage)}
        // onChange={handleDetailsChange}
        autoComplete="off"
      />
      {/* <h3>Shop Name: {shopData.name}</h3>
      <h3>Description: {shopData.description}</h3>
      <h3>Subpage: {shopData.subpage}</h3> */}
      <DisplayText size="large">Products in your store:</DisplayText>
      <Products products={products} deleteItem={deleteApiData} />
      
      <PageActions
      primaryAction={{
        content: "Save Changes",
      }}
      secondaryActions={[
        {
          content: "Discard Changes",
          destructive: true,
        },
      ]}
    />
    <a href={"/" + shopData.subpage}>View the Shop</a>
    </Page>
  );
}

export default Admin;
