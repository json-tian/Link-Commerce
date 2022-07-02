import { useParams } from "react-router-dom";

function Admin() {
  let { shop } = useParams();

  return (
    <div>
      <h2>Welcome to the Admin page of {shop}</h2>
    </div>
  );
}

export default Admin;