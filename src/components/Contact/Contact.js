import React, { useEffect } from "react";
import "./contact.css";
import AOS from "aos";

function Contact() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="contact">

      <div className="container page-container">
        <h1 data-aos="fade-up">Contact me.</h1>
        <p>I'm always looking for new projects and career opportunities. <br />
          If you want to hire me, work together, or ask me any questions, shoot me a message. </p>

        <div className="row justify-content-center contact-row">
          <div className="col-12">
            <a href="mailto:best.dylan15@gmail.com">
              <i className="fa fa-envelope-o fa-2x social-link" aria-hidden="true"></i>Email: best.dylan15@gmail.com</a>
          </div>

          <div className="col-12 col-md-3">
            <a href="https://github.com/dylanbest15">
              <i className="fa fa-github fa-2x social-link" aria-hidden="true"></i>Github: dylanbest15</a>
          </div>

          <div className="col-12 col-md-3">
            <a href="https://www.linkedin.com/in/dylanbest15/">
              <i className="fa fa-linkedin fa-2x social-link" aria-hidden="true"></i>Linkedin: dylanbest15</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact;