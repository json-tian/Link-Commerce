import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from "./components/shop/Shop";
import Admin from "./components/admin/Admin";
import React from "react";
import '@shopify/polaris/build/esm/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<p>Home page</p>} />
        <Route exact path="/:shop" element={<Shop />} />
        <Route exact path="/:shop/admin" element={<Admin />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
