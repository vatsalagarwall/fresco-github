// import React from "react";
// // import "./Css/Discount.css";
// import Navbar from "./Navbar";
// import { Link, useNavigate } from "react-router-dom";

// function Discount() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="text-center">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1661954531673-440d23a6eb79?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="Image"
//                 className="img-fluid"
//               />
//             </div>
//           </div>
//           <div className="col">
//             <div className="text-left">
//               <h2 className="wednesday">About Us</h2>

//               <p className="description">
//                 Fresco is a culinary haven where Italy's rich food traditions
//                 come to life. For over two decades, we've delighted our
//                 community with a menu that transports you straight to Italy's
//                 heart. Our Margherita pizzas and Spaghetti Carbonara are an
//                 exploration of flavors that reflect our unwavering commitment to
//                 quality ingredients. With a team of over 50 passionate
//                 individuals, we take pride in every dish we create, ensuring
//                 that every bite bursts with authentic Italian essence. Beyond
//                 food, we believe in giving back to our community through regular
//                 charity events, embodying our values of care and compassion. At
//                 Fresco, we invite you to share the joy of Italian cuisine with
//                 us and experience the heart of Italy right here in your
//                 neighborhood. Buon appetito!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Discount;

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Css/About.css";

function About() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1661954531673-440d23a6eb79?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661476065598-c2a3629c8c43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682778418768-16081e4470a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col">
            <div className="text-center">
              <img
                src={imageUrls[currentImage]}
                alt={`Image ${currentImage + 1}`}
                className="img-fluid"
                style={{ width: "550px", height: "400px" }}
              />
            </div>
          </div>
          <div className="col">
            <div className="text-left">
              <h2 className="wednesday">About Us</h2>

              <p className="description">
                Fresco, an enchanting culinary oasis, where the illustrious
                culinary traditions of Italy unfurl in a symphony of flavors.
                For over two glorious decades, we've been on a sublime odyssey,
                crafting a menu that serves as a portal to the very soul of
                Italy. Our Margherita pizzas and Spaghetti Carbonara are poetic
                expressions of taste, imbued with our unwavering devotion to the
                finest ingredients.
                <br /> With a family of over 50 ardent artisans, we have
                embarked on a passionate culinary expedition. Every creation, a
                work of art, meticulously crafted to ensure that each morsel
                exudes the essence of authentic Italian cuisine. Beyond our
                culinary canvas, we cherish the noble art of giving back to our
                cherished community. Through a tapestry of charitable events, we
                manifest our ethos of benevolence and empathy. <br />
                <br />
                At Fresco, we extend a heartfelt invitation for you to partake
                in the ecstasy of Italian gastronomy. Embark on a journey that
                transports you to the heart of Italy, all within the embrace of
                your own neighborhood. Buon appetito!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
