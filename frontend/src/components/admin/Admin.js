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
  ButtonGroup,
  DisplayText,
  Page,
  PageActions,
  TextField,
} from "@shopify/polaris";
import Logout from "../logout";
import NotAuthorized from "../../NotAuthorized";

function Admin({ user }) {
  let { shop } = useParams();
  const [shopData, setShopData] = useState({});
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  };

  const [disabledShopName, setDisabledShopName] = useState(true);
  const [disabledShopDescription, setDisabledShopDescription] = useState(true);
  const [disabledShopSubpage, setDisabledShopSubpage] = useState(true);
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [shopSubpage, setShopSubpage] = useState("");
  const [adminUser, setAdminUser] = useState(user);

  const handleShopNameChange = useCallback(
    (newValue) => setShopName(newValue),
    []
  );
  const handleShopDescriptionChange = useCallback(
    (newValue) => setShopDescription(newValue),
    []
  );
  const handleShopSubpageChange = useCallback(
    (newValue) => setShopSubpage(newValue),
    []
  );

  const handleEditShopName = useCallback(() => setDisabledShopName(false), []);
  const handleEditShopDescription = useCallback(
    () => setDisabledShopDescription(false),
    []
  );
  const handleEditShopSubpage = useCallback(
    () => setDisabledShopSubpage(false),
    []
  );

  const saveShopName = useCallback(() => setDisabledShopName(true), []);
  const saveShopDescription = useCallback(
    () => setDisabledShopDescription(true),
    []
  );
  const saveShopSubpage = useCallback(
    () => setDisabledShopSubpage(true),
    []
  );

  const handleSaveShopName = () => {
    patchApiData("shops/" + shopData.id, { name: shopName });
    saveShopName();
  };
  const handleSaveShopDescription = () => {
    patchApiData("shops/" + shopData.id, { description: shopDescription });
    saveShopDescription();
  };
  const handleSaveShopSubpage = () => {
    patchApiData("shops/" + shopData.id, { subpage: shopSubpage });
    saveShopSubpage();
  };

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
    <React.Fragment>
      {user && user === shopData.email ? (
        <Page
          breadcrumbs={[
            { content: shopData.name, url: "/" + shopData.subpage },
          ]}
          title="Admin Page"
          subtitle={shopData.name}
          compactTitle
          primaryAction={<Logout />}
        >
          <DisplayText size="extraLarge">Welcome to the Admin Page</DisplayText>
          <DisplayText size="large">Store Details:</DisplayText>
          <TextField
            label="Shop Name"
            disabled={disabledShopName}
            value={shopName}
            onChange={handleShopNameChange}
            autoComplete="off"
            connectedRight={
              <ButtonGroup>
                <Button onClick={handleEditShopName}>Edit</Button>
                <Button primary onClick={handleSaveShopName}>
                  Save
                </Button>
              </ButtonGroup>
            }
          />
          <TextField
            label="Shop Description"
            disabled={disabledShopDescription}
            value={shopDescription}
            onChange={handleShopDescriptionChange}
            autoComplete="off"
            connectedRight={
              <ButtonGroup>
                <Button onClick={handleEditShopDescription}>Edit</Button>
                <Button primary onClick={handleSaveShopDescription}>
                  Save
                </Button>
              </ButtonGroup>
            }
          />
          <TextField
            label="Shop Subpage"
            disabled={disabledShopSubpage}
            value={shopSubpage}
            onChange={handleShopSubpageChange}
            autoComplete="off"
            connectedRight={
              <ButtonGroup>
                <Button onClick={handleEditShopSubpage}>Edit</Button>
                <Button primary onClick={handleSaveShopSubpage}>
                  Save
                </Button>
              </ButtonGroup>
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
      ) : (
        <NotAuthorized />
      )}
    </React.Fragment>
  );
}

export default Admin;
