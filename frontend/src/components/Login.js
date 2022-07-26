import { GoogleLogin } from "react-google-login";
import React from "react";
import { useNavigate } from "react-router-dom";
import { postApiData, getApiData } from "../utils/controller";

function Login({ setUser }) {
  const navigate = useNavigate();

  // UID generator from https://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
  const generateUID = () => {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
  };

  const onSuccess = (res) => {
    setUser(res.profileObj.email);
    getApiData("shops/?email=" + res.profileObj.email).then((shopData) => {
      if (shopData.length !== 0) {
        navigate("/" + shopData[0].subpage + "/admin");
      } else {
        // Create a new shop
        postApiData("shops/", {
          email: res.profileObj.email,
          name: res.profileObj.name + "'s Shop",
          description: "",
          subpage: "shop-" + generateUID(),
          background: "0,0,100",
        }).then((shopData) => {
          navigate("/" + shopData.subpage + "/admin");
        });
      }
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
