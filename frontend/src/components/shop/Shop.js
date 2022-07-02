import { useEffect, useState } from "react";
import Product from "./Product";
import { useParams } from "react-router-dom";
import { getApiData } from "../../utils/controller";
import NotFound from "../../NotFound";
import React from "react";

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
    <div>
      <h2>Welcome to {shop}</h2>
      <h1>Product List</h1>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  ) : (
    <NotFound />
  );
}

export default Shop;
