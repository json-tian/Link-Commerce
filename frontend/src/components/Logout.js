import { GoogleLogout } from "react-google-login";
import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

  const onSuccess = () => {
    console.log("Logout successful");
    // setUser(null);
    navigate("/");

  };
  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
