import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import CustomContext from "./utils/CustomContext";
import { LoginReducer } from "./utils/LoginReducer";
import PrivateRoute from "./utils/PrivateRoute";

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Create = lazy(() => import('./pages/Create'));
const Explore = lazy(() => import('./pages/Explore'));
const User = lazy(() => import('./pages/User'));
const Asset = lazy(() => import('./pages/Asset'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const [loginState, loginDispatch] = React.useReducer(LoginReducer, { login: false });

  const providerState = {
    loginState,
    loginDispatch
  }
  return (
    <div className="App h-full bg-purple-700">
      <CustomContext.Provider value={providerState} >
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={
              <PrivateRoute >
                <AboutUs />
              </PrivateRoute>
            } />
            <Route path="/explore" element={
              <PrivateRoute >
                <Explore />
              </PrivateRoute>
            } />
            <Route path="/create" element={
              <PrivateRoute >
                <Create />
              </PrivateRoute>
            } />
            <Route path="/user" element={
              <PrivateRoute >
                <User />
              </PrivateRoute>
            } />
            <Route path="/asset" element={
              <PrivateRoute >
                <Asset />
              </PrivateRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CustomContext.Provider>
    </div>

  );
}

export default App;
