import React from "react";
import "./Css/Footer.css";

const footerStyle = {
  textAlign: "center",
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

function Footer() {
  return (
    <footer style={footerStyle} className="footer">
      <div className="footer-part">
        <p>Fresco - India’s awarded authentic Italian restaurant</p>
      </div>
    </footer>
  );
}

export default Footer;
