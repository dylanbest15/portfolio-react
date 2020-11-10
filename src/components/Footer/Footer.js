import React from "react";
import "./footer.css";
import Pdf from "../../assets/Dylan-Best-Resume.pdf";

function Footer() {
  return (
    <footer>

      <a href="#home"><i class="fa fa-angle-double-up fa-2x back-to-top" aria-hidden="true"></i><br /></a>

      <br />

      <a href="https://github.com/dylanbest15"><i class="fa fa-github fa-2x social-link" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/dylanbest15/"><i class="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i></a>
      <a href= {Pdf} target="Dylan-Best-Resume.pdf"><i class="fa fa-file-text-o fa-2x social-link" aria-hidden="true"></i></a>
      <a href="mailto:best.dylan15@gmail.com"><i class="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i></a>
      <p>Dylan Best © 2020</p>

    </footer>
  )
}

export default Footer;