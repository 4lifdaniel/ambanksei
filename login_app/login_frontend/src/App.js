import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Auth";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //When initializing check if the logged in is stored in local storage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    //Check if local storage contains an item with name "isLoggedIn"
    const storedValue = localStorage.getItem("isLoggedIn");
    //If the storedValue is present then set it in state or else set false
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const baseURL = "http://localhost:3003";

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  //To keep the isLoggedIn state value in browser storage and update everytime
  useEffect(() => {
    // Store the isLoggedIn value in localStorage whenever it changes
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Dashboard handleLogout={handleLogout} />
            ) : (
              <Auth handleLogin={handleLogin} baseURL={baseURL} />
            )
          }
        />
        <Route path="/signup" element={<Signup baseURL={baseURL} />} />
      </Routes>
    </Router>
  );
}

export default App;
