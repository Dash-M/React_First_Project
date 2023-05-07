import React from "react";

export default function Navbar() {
  return (
    <nav>
      <img
        src="../images/react-icon-small.png"
        className="nav--logo"
        alt="logo"
      />
      <h3 className="nav--title">ReactFacts</h3>
      <h4 className="nav--sidetext">React Course - Project 1</h4>
    </nav>
  );
}
