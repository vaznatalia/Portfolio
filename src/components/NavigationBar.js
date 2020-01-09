import React from "react";
import { Link } from "react-router-dom";

const navigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg   mb-5 navbar-dark bg-transparent pyarn">
       <Link  exact
            to="/" className="navbar-brand" style={{textShadow:'2px 2px pink'}}  >NV</Link>      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">

          <Link
            exact
            to="/intro"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Intro
          </Link>
          <Link
            exact
            to="/projects"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Projects
          </Link>
        
        </div>
      </div>
    </nav>
  );
};

export default navigationBar;
