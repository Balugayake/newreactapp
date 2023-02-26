import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen.jsx";
import Header from "./Header.jsx";
import Signup from "./Signup";
import HomeScreen from "./component/homePage/HomeScreen.jsx";
import Home from "./component/Home.jsx";
export default function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);
  return (
    <Router>
      {showSplashScreen ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/People" element={<Home />} />
          </Routes>
        </>
      )}
    </Router>
  );
}
