import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "./Css/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Please fill all the details");
      return;
    }
    axios
      .post("http://localhost:5000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        setRedirectToHome(true);
      })
      .catch((err) => console.log(err));
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="center-container">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <h4>Signup</h4>
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
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
        <p>Already have an account?</p>
        <button
          type="button"
          class="btn btn-light"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Signup;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, Navigate } from "react-router-dom";
// import "./Css/Signup.css";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirectToHome, setRedirectToHome] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
//       alert("Please fill all the details.");
//     } else {
//       axios
//         .post("http://localhost:5000/register", { name, email, password })
//         .then((result) => {
//           console.log(result);
//           setRedirectToHome(true);
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   if (redirectToHome) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="center-container">
//       <div className="signup-form">
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <h4>Signup</h4>
//             <label htmlFor="exampleInputEmail1">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter name"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//         <p>Already have an account?</p>
//         <button
//           type="button"
//           className="btn btn-light"
//           onClick={() => navigate("/login")}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Signup;
