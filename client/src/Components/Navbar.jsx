// import React from "react";
// import "./Css/Navbar.css";
// import { useNavigate, Link } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           <img
//             src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/fresco-free-logo.svg"
//             height={"35px"}
//             onClick={() => navigate("/")}
//             style={{ marginLeft: "30px" }}
//           />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => navigate("/")}>
//                 Home
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => navigate("/menu")}>
//                 Menu
//               </button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link" onClick={() => navigate("/about")}>
//                 About Us
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className="nav-link"
//                 onClick={() => navigate("/contact ")}
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>

//           <button
//             className="btn btn-light reserve"
//             style={{ color: "white" }}
//             onClick={() => navigate("/reserve")}
//           >
//             Reserve
//           </button>

//           {/* <form className="form-inline my-2 my-lg-0">
//             <button
//               className="btn btn-outline-success my-2 my-sm-0"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//           </form> */}
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import "./Css/Navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/fresco-free-logo.svg"
            height={"35px"}
            onClick={() => navigate("/")}
            style={{ marginLeft: "30px" }}
            alt="Logo"
          />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/menu")}>
                Menu
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/about")}>
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate("/contact")}>
                Contact
              </button>
            </li>
          </ul>
          <button
            className="btn btn-light reserve"
            style={{ color: "white" }}
            onClick={() => navigate("/reserve")}
          >
            Reserve
          </button>

          {/* <form className="form-inline my-2 my-lg-0">
//             <button
//               className="btn btn-outline-success my-2 my-sm-0"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//           </form> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
