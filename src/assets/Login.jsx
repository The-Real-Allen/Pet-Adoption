import React, { useState } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import "./Login.css";
import crystallogo from "./Images/crystal-delta-logo.png";
import loginimg from "./Images/login-img.png";
import Register from "./Register";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState(""); // Separate state for email
  const [password, setPassword] = useState(""); // Separate state for password
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if data exists and matches
    if (!storedUserData) {
      alert("No user found! Please register first.");
      return;
    }

    if (
      email === storedUserData.email &&
      password === storedUserData.password
    ) {
      alert("Logged in successfully!");
      console.log("Login successful:", { email, password });
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-left bg-light">
        <img className="image" src={loginimg} alt="login" />
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{ duration: "0.3" }}
        className="login-right px-4"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          exit={{ x: "-100%" }}
          transition={{ duration: "0.5" }}
          className="login-form"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ duration: "0.7" }}
            className="login-logo-container"
          >
            <img src={crystallogo} alt="logo" className="login-logo" />
          </motion.div>
          <form onSubmit={handleLogin}>
            <motion.h1
              initial={{ x: "100%" }}
              animate={{ x: "0" }}
              exit={{ x: "-100%" }}
              transition={{ duration: "0.7" }}
              className="text-dark"
            >
              Login
            </motion.h1>
            <div className="form-group my-3">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="email"
                className="text-dark my-2"
              >
                Email address
              </motion.label>
              <input
                type="email"
                value={email}
                className="form-control"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-100%" }}
                transition={{ duration: "0.7" }}
                htmlFor="password"
                className="text-dark my-2"
              >
                Password
              </motion.label>
              <div className="password-input-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span>
                  <button
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    className="login-password-visible"
                  >
                    {passwordVisible ? <EyeOff /> : <Eye />}
                  </button>
                </span>
              </div>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            <div className="register">
              <motion.p
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                className="text-secondary"
              >
                Don't have an account?
                <span>
                  <NavLink to="/register" className="register-link">
                    Register
                  </NavLink>
                </span>
              </motion.p>
            </div>
          </form>
        </motion.div>
      </motion.div>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Login;
