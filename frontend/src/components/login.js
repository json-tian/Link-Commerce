import { GoogleLogin } from "react-google-login";
import React from "react";
import { gapi } from "gapi-script";

const clientId =
  "526518063798-u6njeespbn6tciahb2lo1i24qc255c02.apps.googleusercontent.com";

function Login({ user, setUser }) {
  const onSuccess = (res) => {
    console.log("Login Success for: ", res.profileObj);
    setUser(gapi.auth.getToken().access_token);
  };

  const onFailure = (res) => {
    console.log("Login Failed: ", res);

  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
