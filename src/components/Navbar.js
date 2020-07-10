import React from "react";

function Navbar() {
  return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">J A M </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a className="nav-link" href="Home">Home  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About">About </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Contact">Contact</a>
        </li>
        
      </ul>
    </div>
  </nav>
 
  );
}

export default Navbar;
