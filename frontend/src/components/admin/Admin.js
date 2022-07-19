import {
  unstable_HistoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  addApiData,
  deleteApiData,
  getApiData,
  patchApiData,
} from "../../utils/controller";
import React from "react";
import { Products } from "./Products";
import {
  Button,
  ButtonGroup,
  ColorPicker,
  DisplayText,
  DropZone,
  Frame,
  Modal,
  Page,
  Stack,
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
  const [shopBackground, setShopBackground] = useState({});

  const [addProductActive, setAddProductActive] = useState(false);

  const [addProductName, setAddProductName] = useState("");
  const [addProductDescription, setAddProductDescription] = useState("");
  const [addProductPrice, setAddProductPrice] = useState("");
  const [addProductQuantity, setAddProductQuantity] = useState("");

  const [adminUser, setAdminUser] = useState(user);

  const handleShopName = useCallback((name) => setShopName(name), [shopName]);
  const handleShopDescription = useCallback(
    (description) => setShopDescription(description),
    [shopDescription]
  );
  const handleShopSubpage = useCallback((subpage) => setShopSubpage(subpage), [
    shopSubpage,
  ]);

  const handleEditShopName = useCallback(() => setDisabledShopName(false), [
    disabledShopName,
  ]);
  const handleEditShopDescription = useCallback(
    () => setDisabledShopDescription(false),
    [disabledShopDescription]
  );
  const handleEditShopSubpage = useCallback(
    () => setDisabledShopSubpage(false),
    [disabledShopSubpage]
  );

  const saveShopName = useCallback(() => setDisabledShopName(true), [
    disabledShopName,
  ]);
  const saveShopDescription = useCallback(
    () => setDisabledShopDescription(true),
    [disabledShopDescription]
  );
  const saveShopSubpage = useCallback(() => setDisabledShopSubpage(true), [
    disabledShopSubpage,
  ]);

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
  const handleSaveShopBackground = () => {
    patchApiData("shops/" + shopData.id, {
      background: `${shopBackground.hue},${shopBackground.saturation},${shopBackground.brightness}`,
    });
  };

  const handleAddProductModal = useCallback(
    () => setAddProductActive(!addProductActive),
    [addProductActive]
  );

  const handleAddProductName = useCallback((name) => setAddProductName(name), [
    addProductName,
  ]);
  const handleAddProductDescription = useCallback(
    (description) => setAddProductDescription(description),
    [addProductDescription]
  );
  const handleAddProductPrice = useCallback(
    (price) => setAddProductPrice(price),
    [addProductPrice]
  );
  const handleAddProductQuantity = useCallback(
    (quantity) => setAddProductQuantity(quantity),
    [addProductQuantity]
  );

  // remember to do input sanitization later
  const handleAddProduct = () => {
    addApiData("shops/" + shopData.id + "/products", {
      title: addProductName,
      description: addProductDescription,
      image: "",
      price: parseFloat(addProductPrice),
      quantity: parseInt(addProductQuantity),
      sold: 0,
      shop_id: shopData.id,
    });
    refreshPage();
  };

  const handleDeleteProduct = (url) => {
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
        setShopBackground(() => {
          var hueSaturationBrightness = shopData[0].background.split(",");
          return {
            hue: hueSaturationBrightness[0],
            saturation: hueSaturationBrightness[1],
            brightness: hueSaturationBrightness[2],
          };
        });
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

  const addProductButton = (
    <Button onClick={handleAddProductModal}>Add product</Button>
  );

  const addProductModal = (
    // <div style={{ height: "50%" }}>
    <Modal
      large
      noScroll
      open={addProductActive}
      onClose={handleAddProductModal}
      title="Add a new product to your shop!"
      primaryAction={{
        content: "Add product",
        onAction: handleAddProduct,
      }}
    >
      <Modal.Section>
        <TextField
          label="Product Name"
          value={addProductName}
          onChange={handleAddProductName}
        />
        <TextField
          label="Description"
          value={addProductDescription}
          onChange={handleAddProductDescription}
        />
        <TextField
          label="Price"
          type="number"
          prefix="$"
          value={addProductPrice}
          onChange={handleAddProductPrice}
        />
        <TextField
          label="Quantity"
          type="number"
          value={addProductQuantity}
          onChange={handleAddProductQuantity}
        />
        <DropZone label="Example Image" type="file" onDrop={() => {}}>
          <DropZone.FileUpload />
        </DropZone>
      </Modal.Section>
    </Modal>
    // </div>
  );

  const actualPageMarkup = (
    <Page
      breadcrumbs={[{ content: shopName, url: "/" + shopSubpage }]}
      title="Admin Page"
      subtitle={shopData.name}
      compactTitle
      primaryAction={<Logout />}
      secondaryActions={addProductButton}
    >
      {addProductModal}
      <DisplayText size="extraLarge">Welcome to the Admin Page</DisplayText>
      <DisplayText size="large">Store Details:</DisplayText>
      <TextField
        label="Shop Name"
        disabled={disabledShopName}
        value={shopName}
        onChange={handleShopName}
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
        onChange={handleShopDescription}
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
        onChange={handleShopSubpage}
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
      <Stack vertical alignment="center" distribution="fillEvenly">
        <DisplayText size="small">Shop Background</DisplayText>
        <ColorPicker onChange={setShopBackground} color={shopBackground} />
        <Button primary onClick={handleSaveShopBackground}>
          Save
        </Button>
      </Stack>
      <DisplayText size="large">Products in your store:</DisplayText>
      <Products products={products} deleteItem={handleDeleteProduct} />
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

  return (
    <React.Fragment>
      {user && user === shopData.email ? (
        <Frame>{actualPageMarkup}</Frame>
      ) : (
        <NotAuthorized />
      )}
    </React.Fragment>
  );
}

export default Admin;
