import React from "react";
import { useNavigate } from "react-router-dom";
// import FacebookLogin from "react-facebook-login";

// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="App">
      <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>
      {/* <FacebookLogin
        appId="" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      /> */}
      <br />
      <br />

        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            navigate('/home');
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      
    </div>
  );
};

export default Login;
