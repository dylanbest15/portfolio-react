import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>

      <a href="#home">
        <button className="btn btn-primary footer-button">
          <i class="fa fa-angle-double-up fa-2x" aria-hidden="true"></i><br />Home</button></a>

      <br />

      <a><i class="fa fa-github fa-2x social-link" aria-hidden="true"></i></a>
      <a><i class="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i></a>
      <a><i class="fa fa-file-text-o fa-2x social-link" aria-hidden="true"></i></a>
      <a><i class="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i></a>
      <p>Dylan Best © 2020</p>

    </footer>
  )
}

export default Footer;