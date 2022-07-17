import { GoogleLogout } from "react-google-login";
import React from "react";

const clientId =
  "526518063798-u6njeespbn6tciahb2lo1i24qc255c02.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout successful");
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
