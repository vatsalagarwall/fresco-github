import React from "react";
import "./Css/Main.css";

function Main() {
  return (
    <main>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://docsallover.com/static/images/logo-landscape.60ec22f9daf0.png"
          alt=""
        />
        <h1 className="display-5 text-body-emphasis fresco">Fresco</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 tagline">Italian Specialities</p>
          <p className="lead mb-4 tagline">Good Food | Good wine</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
