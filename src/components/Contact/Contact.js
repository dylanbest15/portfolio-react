import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section id="contact">

      <div className="container page-container">
        <h1>Contact me.</h1>

        <div className="row justify-content-center">
          <div className="col-6">
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

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>


      </div>

    </section>
  )
}

export default Contact;