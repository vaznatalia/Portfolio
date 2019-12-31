import React, { Component } from 'react'
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

class Example extends Component {
  render () {
    return (
      <>
     
       <p className="animatedLetter"> ESCAPE INTO AMAZING EXPERIENCES</p>
      <i  class="fas fa-angle-double-down"></i>
      
        <Particles style={{zIndex:'-1'}} />
       
      
    
</>
    )
  }
}
export default Example