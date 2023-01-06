import React from "react";
import { useNavigate } from "react-router-dom";
// import FacebookLogin from "react-facebook-login";

// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className=" bg-white justify-center">
      <div>
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
      </div>

      {/* <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={() => console.log("responseFacebook")}
      /> */}
      <div className="flex rounded-lg py-4 px-4 bg-sky-600 justify-center mx-80 my-40">
        <GoogleLogin
          text="sign in with Google"
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            navigate("/home");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default Login;
