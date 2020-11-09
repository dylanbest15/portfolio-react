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

        <div className="row justify-content-center" data-aos="zoom-in">
          <div className="col-10 col-md-6">
            <form>
              <div className="form-group">
                <input type="name" class="form-control" id="name" placeholder="Your name."></input>
              </div>

              <div className="form-group">
                <input type="email" class="form-control" id="email" placeholder="Your email."></input>
              </div>

              <div className="form-group">
                <textarea class="form-control" id="message" rows="8" placeholder="Your message."></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Contact;