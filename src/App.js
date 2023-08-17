import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Shop from "./pages/shop/shop";
import Login from "./pages/login/login";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { database } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(database, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={user ? <Shop /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
