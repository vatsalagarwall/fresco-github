import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          setRedirectToHome(true);
        }
      })
      .catch((err) => console.log(err));
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="center-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h4>Login</h4>
            <label htmlFor="exampleInputEmail1"> address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p>Don't have an account?</p>
        <button
          type="button"
          class="btn btn-light"
          onClick={() => navigate("/register")}
        >
          Signup
        </button>
        {/* <Link to="/register">Signup</Link> */}
      </div>
    </div>
  );
}

export default Login;
