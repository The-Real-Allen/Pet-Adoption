import React, { useState } from "react";
import logo from "./Images/logo.png";
import Login from "./Login";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import "./Navbar.css";
import Register from "./Register";
import Contact from "./Contactus";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
import Section2 from "./Section2";

function Navbar() {
  const navitems = [
    { name: "Home", path: "/home" },
    { name: "Adopt", path: "/adopt" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Blog", path: "/blog" },
    { name: "About Us", path: "/about-us" },
  ];

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img className="navbar-brand" src={logo} alt="Logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navitems.map((item, index) => (
                <li className="nav-item mx-2" key={index}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex">
            <NavLink
              className="  btn  px-4 navrightbtn mx-2"
              to="/contact"
              aria-label="Contact Us"
            >
              Contact Us
            </NavLink>

            <NavLink
              className="text-decoration-none  btn  px-4 navrightbtn mx-2"
              to="/Login"
            >
              Signup/Login
            </NavLink>
          </div>
        </nav>
        <Routes location={location} key={location.pathname}>
          {/* Renders Home component for root path */}
          <Route path="/filter" element={<Section2 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adopt" element={<Section2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default Navbar;
