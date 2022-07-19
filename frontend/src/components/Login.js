import { GoogleLogin } from "react-google-login";
import React from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { getApiData } from "../utils/controller";

function Login({ setUser}) {
  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Login Success for: ", res.profileObj);
    // let auth2 = gapi.auth2.getAuthInstance();
    // auth2.disconnect();
    //  setUser(gapi.auth2.getToken().access_token);
    setUser(res.profileObj.email);
    getApiData("shops/?email=" + res.profileObj.email).then((shopData) => {
      navigate("/" + shopData[0].subpage + "/admin");
    });


  };

  const onFailure = (res) => {
    console.log("Login Failed: ", res);

  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
