import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

class Example extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isHovered: false };

  }

  handleEnter() {
    this.setState({
      isHovered: true 
    });
  }
  
  handleLeave() {
    this.setState({
      isHovered: false 
    });
  }
  render () {
    return (
      <>
     
       <p className="animatedLetter"> ESCAPE INTO AMAZING EXPERIENCES</p>
      <i onMouseEnter={this.handleEnter.bind(this)}
            onMouseLeave={this.handleLeave.bind(this)}  class="fas fa-angle-double-down"></i>
       {this.state.isHovered ? (
          <a class="btn boxx">
            <p>
              I'm a creative Full Stack Web Developer <br/>
              who loves animation and work with React 
            </p>
          </a>     
               ) : (
            <div />
          )}
        
        <Particles style={{zIndex:'-1'}} />
       
      
    
</>
    )
  }
}
export default Example