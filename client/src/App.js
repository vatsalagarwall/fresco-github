import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import FirstPage from "./Components/FirstPage";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Offer from "./Components/Offer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Reserve from "./Components/Reserve"
import ThankYou from "./Components/ThankYou";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
          <Route path="/reservation" element={<ThankYou />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;