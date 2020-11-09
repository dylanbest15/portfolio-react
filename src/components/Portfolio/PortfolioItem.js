import React from "react";

function PortfolioItem(props) {
  return (
    <div className="col-12 col-md-6">
      <div className="container item-container">
        <img src={props.image} alt={props.name}></img>
        <div className="middle">
          <p className="text-name">{props.name}</p>
          <p className="text-tech">{props.tech}</p>
          <a href={props.link}><button className="btn btn-primary btn-livelink">Visit website</button></a>
          <a href={props.github}><button className="btn btn-primary btn-github">See the code</button></a>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem;