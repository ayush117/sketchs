import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Create = lazy(() => import('./pages/Create'));
const Explore = lazy(() => import('./pages/Explore'));
const User = lazy(() => import('./pages/User'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <div className="App bg-slate-800">
      <Suspense>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
    
  );
}

export default App;
