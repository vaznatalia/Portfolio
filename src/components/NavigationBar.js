import React, { Component} from 'react';
// import styled from 'styled-components';
import '../App.css'



const NavigationBar = () => {

  const handleClickLogo = () => {
    window.location = '/';
  };
  const handleClickIntro = () => {
    window.location = '/intro';
  };
  const handleClickProjects = () => {
    window.location = '/projects';
  };
  const handleClickContact = () => {
    window.location = '/projects';
  };
  
 
  return(
 
<nav className="navbar navbar-expand-lg   mb-5 navbar-dark bg-transparent pyarn" >
  <a className="navbar-brand" style={{textShadow:'2px 2px pink'}}  onClick={handleClickLogo} href="#">NV</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse menu"  id="navbarNav">
    <ul   className="navbar-nav">
      <li  className="nav-item active">
        <a className="nav-link" onClick={handleClickIntro} href="#">Intro <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={handleClickProjects} href="#">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" onClick={handleClickContact} href="#">Contact</a>
      </li>
      
    </ul>
  </div>
</nav>

  )
  }

export default NavigationBar