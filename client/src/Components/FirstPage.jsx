import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Customer from "./Customer";
import Footer from "./Footer";
import Main from "./Main";
import Menu_Display from "./Menu_Display";
import Discount from "./Discount";

function FirstPage() {
  return (
    <div>
      <Navbar />
      <Main />
      <Welcome />
      <Menu_Display />
      <Discount />
      <Customer />
      <Footer />
    </div>
  );
}

export default FirstPage;
