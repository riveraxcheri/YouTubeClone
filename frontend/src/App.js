// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./input.css";
import React from 'react';


// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import {KEY} from "./localKey";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPage from "./components/VideoPage/VideoPage";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";


function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage />
          }
        />
        <Route path= "/video/:videoId" element={<VideoPage/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
