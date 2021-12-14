import React from "react";
import Typed from "react-typed";

function Header() {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Web Development</h1>
        <Typed
          className="typed-text"
          strings={["Hevin Jantasmin", "Computer Science", "Cal Poly SLO"]}
          typeSpeed={120}
          backSpeed={30}
          loop
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
