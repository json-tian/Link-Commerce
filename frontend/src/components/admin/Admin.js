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
  ColorPicker,
  DisplayText,
  DropZone,
  Frame,
  Modal,
  Page,
  Stack,
  TextField,
} from "@shopify/polaris";
import Logout from "../Logout";
import NotAuthorized from "../../NotAuthorized";
import { storage } from "../../firebase";
import { ref } from "firebase/storage";
import { EditSaveTextField } from "./EditSaveTextField";

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

  const [acceptedFile, setAcceptedFile] = useState([]);
  const [rejectedFile, setRejectedFile] = useState([]);

  const [adminUser, setAdminUser] = useState(user);

  const saveShopName = (shopName) => {
    patchApiData("shops/" + shopData.id, { name: shopName });
  };
  const saveShopDescription = (shopDescription) => {
    patchApiData("shops/" + shopData.id, { description: shopDescription });
  };
  const saveShopSubpage = (shopSubpage) => {
    patchApiData("shops/" + shopData.id, { subpage: shopSubpage });
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

  const uploadFile = (file) => {
    if (!file) return;

    const storageRef = ref(storage, `/products/`);
  };

  const addProductButton = (
    <Button onClick={handleAddProductModal}>Add product</Button>
  );

  // const fileUpload = !files.length && <DropZone.FileUpload />;

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
          {/* {fileUpload} */}
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
      <EditSaveTextField
        label="Shop Name"
        initialValue={shopData.name}
        apiHandler={saveShopName}
      />
      <EditSaveTextField
        label="Shop Description"
        initialValue={shopData.description}
        apiHandler={saveShopDescription}
      />
      <EditSaveTextField
        label="Shop Subpage"
        initialValue={shopData.subpage}
        apiHandler={saveShopSubpage}
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
