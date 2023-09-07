import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Css/Offer.css";

function About() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const imageUrls = [
    "https://images.unsplash.com/photo-1548529793-1325ac6b99a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1501437366326-4526f2346f19?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682551199022-3a44bf4debd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1524823519746-80a3e3824223?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        className="container d-flex align-items-center justify-content-center offer"
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
              <h2 className="wednesday">Offers</h2>

              <p className="description">
                1. <b>Wednesday Bliss:</b> Elevate your midweek experience with
                unlimited beer refills every Wednesday at Fresco Cafe. Cheers to
                a delightful evening of flavor and fun.
                <br />
                2. <b>Sip and Savor:</b> Indulge in the charm of Half Price
                Bottles of Wine, the perfect pairing for a memorable dining
                experience. Discover a world of taste at an exceptional value.{" "}
                <br />
                3. <b>Tantalize Your Taste Buds:</b> Dive into a culinary
                adventure with our Six Tasty Launches for just $9. Unleash a
                symphony of flavors in every bite as you explore our new menu.
                <br />
                4. <b>Feast with Savings:</b> Experience our generous servings
                at a discounted rate. Enjoy hearty meals that satisfy your
                cravings and your wallet.
                <br />
                5. <b>All-Day Delights:</b> Delight in the best of both worlds
                with offers on all food and drinks at Fresco Cafe. Let your
                taste buds dance to the symphony of flavors without breaking the
                bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
