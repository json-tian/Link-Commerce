import Products from "./ProductDisplay";
import { useParams } from "react-router-dom";

function Shop() {
  let { shop } = useParams();

  return (
    <div>
      <h2>Welcome to {shop}</h2>
      <Products />
    </div>
  );
}

export default Shop;
