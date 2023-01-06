import React from "react";
import { useNavigate } from "react-router-dom";
// import FacebookLogin from "react-facebook-login";

// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from "@react-oauth/google";
import { useCustomContext } from "../utils/CustomContext";

const Login = (props) => {
  let navigate = useNavigate();
  const { loginState, loginDispatch } = useCustomContext();
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
            loginDispatch({type: "login_success"})
            navigate('/');
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      
    </div>
  );
};

export default Login;
