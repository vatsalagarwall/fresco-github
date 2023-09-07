import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "./Css/Signup.css";
import { useNavigate } from "react-router-dom";

function Reserve() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState("");
  const [datetime, setDateTime] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  const minDateTime = getCurrentDateTime();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      name.trim() === "" ||
      phone.trim() === "" ||
      people.trim() === "" ||
      datetime.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    axios
      .post("http://localhost:5000/reserve", {
        email,
        name,
        phone,
        people,
        datetime,
      })
      .then((result) => {
        console.log(result);
        setRedirectToHome(true);
      })
      .catch((err) => console.log(err));
  };

  if (redirectToHome) {
    return <Navigate to="/reservation" />;
  }

  return (
    <div className="center-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h4>Make a Reservation</h4>
            <label htmlFor="exampleInputEmail1">Email address</label>
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
            <label htmlFor="exampleInputPassword1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone</label>
            <input
              type="tel"
              maxLength={10}
              minLength={10}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter phone number"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Number of People</label>
            <input
              type="number"
              min={1}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter number of people"
              onChange={(e) => setPeople(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Date & Time</label>
            <input
              min={minDateTime}
              type="datetime-local"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter date and time"
              onChange={(e) => setDateTime(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reserve
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
