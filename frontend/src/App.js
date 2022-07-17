import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Admin from "./components/admin/Admin";
import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

import Home from "./components/home";

const clientId =
  "526518063798-u6njeespbn6tciahb2lo1i24qc255c02.apps.googleusercontent.com";

function App() {
  const [user, setUser] = useState(null);
  const [auth2, setAuth2] = useState(null);

  useEffect(() => {
    // function start() {
    //   setAuth2(gapi.auth2.init({ clientId: clientId, scope: "" }));
    // }

    // gapi.load('client:auth2', start)
  });

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home user setUser />} />
        <Route exact path="/:shop" element={<Shop />} />
        <Route exact path="/:shop/admin" element={<Admin />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
