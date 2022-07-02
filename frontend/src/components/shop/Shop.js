import { useEffect, useState } from "react";
import Products from "./ProductDisplay";
import { useParams } from "react-router-dom";
import { getApiData } from "../../utils/controller";
import NotFound from "../../NotFound";

function Shop() {
  let { shop } = useParams();
  const [shopData, setShopData] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getData() {
      getApiData("shops/" + shop).then((shopData) => {
        setShopData(shopData);
      });
      getApiData("shops/" + shop + "/products").then((products) => {
        setProducts(products);
      });
    }
    return getData();
  }, [shop]);

  return shopData ? (
    <div>
      <h2>Welcome to {shop}</h2>
      <Products products={products} />
    </div>
  ) : (
    <NotFound />
  );
}

export default Shop;
