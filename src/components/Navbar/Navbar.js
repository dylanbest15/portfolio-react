import React from "react";
import "./navbar.css";
import Pdf from "../../assets/Dylan-Best-Resume.pdf";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <a href="https://github.com/dylanbest15"><i class="fa fa-github fa-lg" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/dylanbest15/"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
      <a href= {Pdf} target="Dylan-Best-Resume.pdf"><i class="fa fa-file-text-o fa-lg" aria-hidden="true"></i></a>
      <a href="mailto:best.dylan15@gmail.com"><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i></a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
  )
}

export default Navbar;

