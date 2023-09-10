// import React from "react";
// import "./Css/MenuDisplay.css";

// function Menu_Display() {
//   return (
//     <div className="hero-section text-center py-5">
//       <h1 className="menu">Our Menu</h1>
//       <p className="tag">Quality Ingredients, Tasty Meals</p>
//       <p className="content">
//         Congue, gravida. Placeat nibh sunt semper elementum anim! Integer lectus
//         debitis auctor. Molestias vivamus eligendi ut, cupidatat nisl iaculis
//         etiam! Laboris aenean .
//       </p>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-4">
//             <div className="grid-item">
//               <h2 className="dish-name">Ham & Fontina</h2>

//               <p className="description">
//                 Roasted eggplant spread, marinated tomatoes.
//               </p>
//               <p className="price">$29.5</p>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="grid-item">
//               <h2 className="dish-name">Spaghetti Delle</h2>
//               <p className="description">
//                 Rustic baguette toasted with herb-garlic butter & parmesan
//               </p>
//               <p className="price">$28</p>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="grid-item">
//               <h2 className="dish-name">Spaghetti Delle</h2>
//               <p className="description">
//                 Rustic baguette toasted with herb-garlic butter & parmesan
//               </p>
//               <p className="price">$28</p>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="grid-item">
//               <h2 className="dish-name">Spaghetti Delle</h2>
//               <p className="description">
//                 Rustic baguette toasted with herb-garlic butter & parmesan
//               </p>
//               <p className="price">$28</p>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="grid-item">
//               <h2 className="dish-name">Spaghetti Delle</h2>
//               <p className="description">
//                 Rustic baguette toasted with herb-garlic butter & parmesan
//               </p>
//               <p className="price">$28</p>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="grid-item">
//               <h2 className="dish-name">Spaghetti Delle</h2>
//               <p className="description">
//                 Rustic baguette toasted with herb-garlic butter & parmesan
//               </p>
//               <p className="price">$28</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Menu_Display;

import React from "react";
import "./Css/MenuDisplay.css";

function Menu_Display() {
  return (
    <div className="hero-section text-center py-5">
      <h1 className="menu">Our Menu</h1>
      <p className="tag">Quality Ingredients, Tasty Meals</p>
      <p className="content">
        Savor our authentic Italian menu, prepared with love and care, for a
        truly delightful dining experience.
      </p>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="grid-item">
              <img
                src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ham & Fontina"
                className="dish-image"
              />
              <h2 className="dish-name">Neopolitan Pizza</h2>
              <p className="description">
                Classic Italian pizza with simplicity.
              </p>
              <p className="commit">$29.5</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spaghetti Delle"
                className="dish-image"
              />
              <h2 className="dish-name">Spaghetti Delle</h2>
              <p className="description">
                Rustic baguette toasted with herb-garlic butter & parmesan.
              </p>
              <p className="">$28</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-item">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spaghetti Delle"
                className="dish-image"
              />
              <h2 className="dish-name">Spaghetti Delle</h2>
              <p className="description">
                Rustic baguette toasted with herb-garlic butter & parmesan.
              </p>
              <p className="price">$28</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-item">
              <img
                src="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spaghetti Delle"
                className="dish-image"
              />
              <h2 className="dish-name">Spaghetti Delle</h2>
              <p className="description">
                Rustic baguette toasted with herb-garlic butter & parmesan.
              </p>
              <p className="price">$28</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spaghetti Delle"
                className="dish-image"
              />
              <h2 className="dish-name">Spaghetti Delle</h2>
              <p className="description">
                Rustic baguette toasted with herb-garlic butter & parmesan.
              </p>
              <p className="price">$28</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="grid-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1677686707480-585883c4f43b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Spaghetti Delle"
                className="dish-image"
              />
              <h2 className="dish-name">Spaghetti Delle</h2>
              <p className="description">
                Rustic baguette toasted with herb-garlic butter & parmesan.
              </p>
              <p className="price">$28</p>
            </div>
          </div>
          {/* Repeat the pattern for other dishes */}
        </div>
      </div>
    </div>
  );
}

export default Menu_Display;
