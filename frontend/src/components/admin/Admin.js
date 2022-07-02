import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiData } from "../../utils/controller";

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
    <div>
      <h2>Welcome to the Admin page</h2>
      <h3>Shop Name: {shopData.name}</h3>
      <h3>Description: {shopData.description}</h3>
      <h3>Subpage: {shopData.subpage}</h3>
      <a href={"/" + shopData.subpage}>View the Shop</a>
    </div>
  );
}

export default Admin;