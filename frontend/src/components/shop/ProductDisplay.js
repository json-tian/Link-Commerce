
function Products({products}) {

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
