import { unstable_HistoryRouter, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { deleteApiData, getApiData } from "../../utils/controller";
import React from "react";
import { Products } from "./Products";
import { Button, DisplayText, Page, PageActions, TextField } from "@shopify/polaris";

function Admin() {
  let { shop } = useParams();
  const [shopData, setShopData] = useState({});
  const [products, setProducts] = useState([]);

  const navigate = useNavigate()
  const refreshPage = () => {
    navigate(0);
}

  // const [value, setValue] = useState("");
  // console.log("hello");
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [shopSubpage, setShopSubpage] = useState("");
  // const [shopName, setShopName] = useState(shopData.name);
  // const [shopDescription, setShopDescription] = useState(shopData.description);
  // const [shopSubpage, setShopSubpage] = useState(shopData.subpage);

  // const handleDetailsChange = useCallback((newValue) => setValue(newValue), []);
  const handleDetailsChange = (setValue) => useCallback((newValue) => setValue(newValue), []);
  // const saveDetailsChange = ();

  const handleDelete = (url) => {
    deleteApiData(url);
    refreshPage();
  };

  useEffect(() => {
    function getData() {
      getApiData("shops/?subpage=" + "darryl").then((shopData) => {
        setShopData(shopData[0]);
        setShopName(shopData[0].name);
        setShopDescription(shopData[0].description);
        setShopSubpage(shopData[0].subpage);
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
        // disabled
        value={shopName}
        // value={shopData.name}
        onChange={handleDetailsChange(setShopName)}
        // onChange={handleDetailsChange}
        autoComplete="off"
        connectedRight={<Button primary>Save</Button>}
      />
      <TextField
        label="Shop Description"
        // disabled
        value={shopDescription}
        // value={shopData.description}
        onChange={handleDetailsChange(setShopDescription)}
        // onChange={handleDetailsChange}
        autoComplete="off"
        connectedRight={<Button primary>Save</Button>}
      />
      <TextField
        label="Shop Subpage"
        // disabled
        value={shopSubpage}
        // value={shopData.subpage}
        onChange={handleDetailsChange(setShopSubpage)}
        // onChange={handleDetailsChange}
        autoComplete="off"
        connectedRight={<Button primary>Save</Button>}
      />
      {/* <h3>Shop Name: {shopData.name}</h3>
      <h3>Description: {shopData.description}</h3>
      <h3>Subpage: {shopData.subpage}</h3> */}
      <DisplayText size="large">Products in your store:</DisplayText>
      <Products products={products} deleteItem={handleDelete} />
      
      {/* <PageActions
      primaryAction={{
        content: "Save Changes",
      }}
      secondaryActions={[
        {
          content: "Discard Changes",
          destructive: true,
        },
      ]}
    /> */}
    </Page>
  );
}

export default Admin;
