import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about">

      <div className="container page-container">
        <h1>About me.</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 img-column">
            <img src="https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png"></img>
          </div>
          <div className="col-12 col-md-8 p-column">
            <p>I'm a full-stack web developer with a certificate from the University of New Hampshire coding bootcamp and a
              bachelor's degree from the University of Pittsburgh. I create websites that are<br /> 
              <span>fast,</span><span>responsive,</span><span>intuitive</span>and<span>dynamic</span> 
              <br /> to create the best user experience. I excel in a team environment and pride myself on my ability to contribute 
              to team culture. I'm always looking for new career opportunies and projects with passionate people. I'm a fast 
              learner and am perpetually focused on improving my work and learning more.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About;