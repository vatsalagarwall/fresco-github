import React from "react";
import "./Css/ThankYou.css";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      Thank You for Reservation.
      <button
        style={{
          border: "2px solid #ff770f",
          color: "white",
          borderRadius: "15px",
          width: "10%",
          backgroundColor: "#ff770f",
        }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ThankYou;
