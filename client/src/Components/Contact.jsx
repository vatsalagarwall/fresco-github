import React from "react";
import "./Css/Contact.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <div className="text-left">
              <h2>Contact Us</h2>
              <p className="description">
                Mail us at: <b>fresco@gmail.com</b>
              </p>
              <p className="description">
                Call us at: <b>1234567890</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
