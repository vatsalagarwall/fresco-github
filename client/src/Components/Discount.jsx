import React from "react";
import "./Css/Discount.css";
import { Link, useNavigate } from "react-router-dom";

function Discount() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1681830416589-b970dd0bd837?auto=format&fit=crop&q=80&w=2075&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col">
          <div className="text-left">
            <h4 className="wednesday">Wednesdays Means</h4>
            <h2>Happy Hours!</h2>
            <p className="tag">
              Half Price of Wine and Six Tasty Launches for $9
            </p>
            <p className="description">
              Join us at Fresco every Wednesday for a delightful culinary
              journey. Enjoy special discounts and unique menu offerings, making
              your midweek dining experience extraordinary. Indulge in the
              perfect blend of flavors and savings that only Fresco can offer on
              Wednesdays.
            </p>
            <button
              type="button"
              class="btn btn-light reserve"
              style={{ color: "white" }}
              onClick={() => navigate("/offer")}
            >
              Discover Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
