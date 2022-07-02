import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/products";

function getApiData() {
  return axios.get(API_URL).then((response) => response.data);
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getData() {
      getApiData().then((products) => {
        setProducts(products);
      });
    }
    return getData();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>Title: {product.title}</h2>
            <h2>description: {product.description}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
