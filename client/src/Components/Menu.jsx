import React from "react";
import "./Css/Menu.css";
import Navbar from "./Navbar";
import { data } from "./Data";

function Menu_Display() {
  return (
    <div>
      <Navbar />
      <div className="hero-section text-center py-5">
        <h1 className="menu">Our Menu</h1>
        <p className="tag">Quality Ingredients, Tasty Meals</p>
        <p className="content">
          Savor our authentic Italian menu, prepared with love and care, for a
          truly delightful dining experience.
        </p>
        <div className="container mt-5">
          <div className="row">
            {data.map((user, index) => (
              <div key={index} className="col-md-4">
                <div className="grid-item">
                  <img
                    src={user.img}
                    alt="Ham & Fontina"
                    className="dish-image"
                  />
                  <h2 className="dish-name">{user.dish_name}</h2>
                  <p className="description">{user.description}</p>
                  <p className="price">{user.dish_price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu_Display;
