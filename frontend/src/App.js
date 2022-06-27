import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Products from "./components/Products";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/v1/products";

function getApiData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    function getData() {
      getApiData().then((products) => {
        setProducts(products)
      })
    }
    return getData();
  }, [])

  return <div className="App">
    <h1>Here are the products: </h1>
    <Products products={products}></Products>
  </div>;
}

export default App;
