import React from "react";
import "./Css/Customer.css";

function Customer() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* First Column */}
        <div className="col-md-6">
          <h2>Happy Customers!</h2>
          <img
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic49-free-img.png"
            style={{ marginTop: "25px" }}
          />
          <p className="review">
            " is a pizza lover's paradise with incredible flavor, and the
            atmosphere makes every visit a delightful experience."
          </p>
          <p className="name">- Shamika Smith</p>
          <br />
        </div>

        {/* Second Column */}
        <div className="col-md-6">
          {/* Row 1 */}
          <div className="row mb-3">
            <div className="col">
              <img src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic50-free-img.png" />
              <p className="review">
                "Fresco Cafe serves up the most amazing pizza I've ever tasted,
                and the vibe is pure perfection. A must-visit for pizza lovers!"
              </p>
              <p className="name">- Jose Hatts</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row mb-3">
            <div className="col">
              <img src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic51-free-img.png" />
              <p className="review">
                "Fresco is a slice of pizza paradise with an amazing vibe. Their
                pizzas are a culinary delight!"
              </p>
              <p className="name">- Monica Tata</p>
            </div>
          </div>

          {/* Row 3 */}
        </div>
      </div>
    </div>
  );
}

export default Customer;
