import React, { useState, useRef } from "react";
import { Popover } from "react-tiny-popover";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "./Images/logo.png";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const formRef = useRef();

  // Ensure this is the form element
  // Send email using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_y86a2i8", // Your Service ID
        "template_ckqaqcb", // Your Template ID
        formRef.current, // Form reference (this is important to correctly bind the form data)
        "A5P8PNobY-AL6uP24" // Your Public Key
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          console.log(result.text); // This logs the response from EmailJS (useful for debugging)
        },
        (error) => {
          alert("Failed to send email. Please try again.");
          console.log(error.text); // Logs detailed error message from EmailJS
        }
      )
      .catch((error) => {
        // This will catch any other unexpected errors
        console.log(error);
        alert("Failed to send email. Please check your input.");
      });
  };

  const handleClose = () => {
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="contact-container1">
      <Popover
        isOpen={isActive}
        positions={["top", "right", "bottom", "left"]}
        content={
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            className="px-2 py-2 ms-5 contact-container"
          >
            <div className="contact-top1 d-flex justify-content-between">
              <h3>Contact Us</h3>
              <X
                className="close-icon"
                onClick={() => {
                  setIsActive(false);
                  handleClose();
                }}
              />
            </div>
            <div className="contact-center px-2">
              <div className="contact-left mt-3">
                <div className="contact-left-top">
                  <img className="contact-icon me-2" src={logo} alt="Logo" />
                  <h4 className="pt-1">Your Pet Adoption Farm</h4>
                </div>
                <div className="mt-4">
                  <p>Address:</p>
                  <p className="mt-3">
                    #12, West Garden Street,
                    <br />
                    BKL West Modern City
                    <br />
                    New York-49585
                  </p>
                </div>
              </div>
              <div className="contact-right mt-3 ps-3">
                <h4 className="pt-1">Connect With Us</h4>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      id="fullName"
                      className="form-control border border-2"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control border border-2"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control border border-2"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                      id="address"
                      name="address"
                      className="form-control contactform border border-2"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="contact-bottom d-flex justify-content-between py-4">
              <button
                type="button"
                className="btn contactbottombtn"
                onClick={() => {
                  setIsActive(false);
                  handleClose();
                }}
              >
                Close
              </button>
              <button
                type="submit"
                className="btn contactbottombtn"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </motion.div>
        }
      >
        <div />
      </Popover>
    </div>
  );
}

export default Contact;
