import "../App.css";

function Products(props) {
  return (
    <div>
      <h1>Product List</h1>
      {props.products.map((product) => {
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
