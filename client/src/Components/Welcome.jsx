import React from "react";
import "./Css/Welcome.css";
import { useNavigate, Link } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="column text-left">
            <h5>Country's Most Loved!</h5>
            <h2>Welcome</h2>
            <p className="tag">
              We Are Locally Crafted Food & Wine Serving Since 1978.
            </p>
            <p className="content">
              Fresco: Where culinary artistry meets a modern ambiance. Explore a
              menu that delights the senses and dine in style. Experience a
              fusion of art and gastronomy at Fresco.
            </p>

            <button
              type="button"
              class="btn btn-light reserve"
              style={{ color: "white" }}
              onClick={() => navigate("/about")}
            >
              More About Us
            </button>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1646257106101-b3913ef72c6f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 1"
              style={{ height: "380px", width: "280px" }}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="column">
            <img
              src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image 2"
              style={{ height: "380px", width: "280px" }}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
