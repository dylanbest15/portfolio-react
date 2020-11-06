import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem";
import "./portfolio.css";

function Portfolio() {

  const [state, setState] = useState([]);

  useEffect(() => {
    setState(PortfolioItems);
  }, []);

  const PortfolioItems = [
    {
      id: 1,
      name: "Work Bytes",
      image: "https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png",
      tech: "jQuery, Materialize, Zomato API, The Muse API, Mapquest API",
      link: "https://relizabet.github.io/Work_Bytes/",
      github: "https://github.com/dylanbest15/Work-Bytes",
    },
    {
      id: 2,
      name: "Outdoor Adventure Buddies",
      image: "https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png",
      tech: "Express-Handlebars / MySQL / Sequelize / Axios / Passport.js / SendGrid",
      link: "https://whispering-castle-57159.herokuapp.com/",
      github: "https://github.com/dylanbest15/Outdoor-Adventure-Buddies"
    },
  ]

  return (
    <section id="portfolio">

      <div className="container page-container">
        <h1>Portfolio</h1>
        <div className="row">

          {state.map(item => (
            <PortfolioItem
              name={item.name}
              tech={item.tech}
              image={item.image}
              link={item.link}
              github={item.github}
            />
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio;