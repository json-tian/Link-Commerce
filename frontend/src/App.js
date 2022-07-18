import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Admin from "./components/admin/Admin";
import React from "react";
import "@shopify/polaris/build/esm/styles.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import NotFound from "./NotFound";
import { gapi } from "gapi-script";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    gapi.load(
      "client:auth2",
      () => {
        gapi.auth2
          .init({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            scope: "",
          })
          .then(() => {
            // gapi.auth2.getAuthInstance().signIn();
            setUser(gapi.auth2.getAuthInstance().currentUser.get().wt.cu);
          });
      },
      []
    );
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home setUser={setUser} />} />
        <Route exact path="/:shop" element={<Shop />} />
        <Route exact path="/:shop/admin" element={<Admin user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
