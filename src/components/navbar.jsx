import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

export const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    signOut(database)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert("" + errorMessage);
      });
  };

  return (
    <div className="navbar">
      <div className="links">
        <div className="title">
          <h1>Mobile Shop</h1>
        </div>
      </div>
      {user ? (
        <div className="logout">
          <button className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </div>
      ) : null}
    </div>
  );
};
