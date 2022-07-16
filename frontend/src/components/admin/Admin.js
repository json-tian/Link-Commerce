import {
  unstable_HistoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  deleteApiData,
  getApiData,
  patchApiData,
} from "../../utils/controller";
import React from "react";
import { Products } from "./Products";
import {
  Button,
  DisplayText,
  Page,
  PageActions,
  TextField,
} from "@shopify/polaris";

function Admin() {
  let { shop } = useParams();
  const [shopData, setShopData] = useState({});
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [shopSubpage, setShopSubpage] = useState("");

  const handleDetailsChange = (setValue) =>
    useCallback((newValue) => setValue(newValue), []);
  const saveShopName = () =>
    patchApiData("shops/" + shopData.id, { name: shopName });
  const saveShopDescription = () =>
    patchApiData("shops/" + shopData.id, { description: shopDescription });
  const saveShopSubpage = () =>
    patchApiData("shops/" + shopData.id, { subpage: shopSubpage });

  const handleDelete = (url) => {
    deleteApiData(url);
    refreshPage();
  };

  useEffect(() => {
    function getData() {
      getApiData("shops/?subpage=" + shop).then((shopData) => {
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
        onChange={handleDetailsChange(setShopName)}
        autoComplete="off"
        connectedRight={
          <Button primary onClick={saveShopName}>
            Save
          </Button>
        }
      />
      <TextField
        label="Shop Description"
        // disabled
        value={shopDescription}
        onChange={handleDetailsChange(setShopDescription)}
        autoComplete="off"
        connectedRight={
          <Button primary onClick={saveShopDescription}>
            Save
          </Button>
        }
      />
      <TextField
        label="Shop Subpage"
        // disabled
        value={shopSubpage}
        onChange={handleDetailsChange(setShopSubpage)}
        autoComplete="off"
        connectedRight={
          <Button primary onClick={saveShopSubpage}>
            Save
          </Button>
        }
      />
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
