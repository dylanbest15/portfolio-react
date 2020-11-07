import React from "react";
import "./home.css";

function Home() {
  return (
    <section id="home">

      <div className="container home-container">
        <h1>Hi, I'm Dylan Best.</h1>
        <h2>I'm a full-stack web developer.</h2>
        <a href="#contact">
          <button className="btn btn-primary btn-lg">Let's build something together
          <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i></button></a>
      </div>

    </section>
  )
}

export default Home;