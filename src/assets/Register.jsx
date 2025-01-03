import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import "./Register.css";
import crystallogo from "./Images/crystal-delta-logo.png";
import registerimg from "./Images/register-img.png";
import Login from "./Login";
import { Eye, EyeOff } from "lucide-react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // Toggle visibility for confirm password

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare user data to store
    const userData = { username, email, password };

    // Save the data in localStorage
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Registered successfully!");
    console.log("Data Saved to LocalStorage:", userData);
  };

  return (
    <div className="register-page">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-200%" }}
        transition={{ duration: "0.3" }}
        className="register-left"
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0" }}
          exit={{ x: "-200%" }}
          transition={{ duration: "0.5" }}
          className="register-form"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-200%" }}
            transition={{ duration: "0.7" }}
            className="register-logo-container"
          >
            <img src={crystallogo} alt="logo" className="register-logo" />
          </motion.div>
          <form onSubmit={handleRegister}>
            <p className="text-dark">Please fill out the form to register!</p>
            {/* Username */}
            <div className="form-group mb-1">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                htmlFor="username"
                className="text-dark"
              >
                Username
              </motion.label>
              <input
                type="text"
                value={username}
                className="form-control"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            {/* Email */}
            <div className="form-group mb-1">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                htmlFor="email"
                className="text-dark"
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
            {/* Password */}
            <div className="form-group mb-1">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                htmlFor="password"
                className="text-dark"
              >
                Password
              </motion.label>
              <input
                type="password"
                value={password}
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* Confirm Password */}
            <div className="form-group mb-3 ">
              <motion.label
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                htmlFor="confirmPassword"
                className="text-dark pb-2"
              >
                Confirm Password
              </motion.label>
              <div className="password-wrapper">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  className="form-control"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                >
                  {confirmPasswordVisible ? <EyeOff /> : <Eye />}
                </button>
                {password !== confirmPassword && confirmPassword && (
                  <p className="text-danger passwordnotmatch mt-1">
                    Passwords do not match.
                  </p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <button type="submit" className="register-btn mt-3">
              Register
            </button>
            {/* Login Link */}
            <div className="register">
              <motion.p
                initial={{ x: "100%" }}
                animate={{ x: "0" }}
                exit={{ x: "-200%" }}
                transition={{ duration: "0.7" }}
                className="text-secondary"
              >
                Already have an account?
                <span>
                  <NavLink to="/Login" className="register-link">
                    Login
                  </NavLink>
                </span>
              </motion.p>
            </div>
          </form>
        </motion.div>
      </motion.div>

      <div className="register-right px-4">
        <img src={registerimg} alt="Register" />
      </div>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Register;
