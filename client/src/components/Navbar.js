import React from "react";

function Navbar() {
  return (
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">J A M </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <a className="nav-link" href="/#home">Home  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#about">About </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#main_content">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#contact-form">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#footer">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
 
  );
}

export default Navbar;
