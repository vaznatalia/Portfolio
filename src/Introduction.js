import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Resume from './components/Resume'
import {Link } from 'react-router-dom'
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
    handleClick ()  {
     this.setState({
       location: './projects'
     })
   }
  
  render () {
    return (
      <>
     
     
  
<div className="center">

<Card className="boxx" style={{ width: '52rem' }}>
    <Card.Header>Introduction</Card.Header>
    <Card.Body>
      <Card.Title style={{textAlign: 'center',fontSize:'30px',color: "pink", fontFamily:'Sriracha, cursive'
}} >  "Each brand has a story to tell, an emotion to convey, a message to share." <br/></Card.Title>
      <Card.Text style={{textAlign:'justify',fontSize: '25px', fontFamily: 'Inconsolata, monospace'}}>

      A creative Full Stack Web Developer Junior,  passionated about everthing 
      that involves technology. Recent  graduated at <a href="https://wyncode.co/">Wyncode</a> Academy in Mami-FL, where am currently based.
      From Brazil and also have a large  background as Pedagogy Educator. 
  
        <br/>
        
        These are some languages, frameworks, libraries and tools  I've learned and used so far:
   <br/>   
            <span className="icons-intro"> 
            <img src="https://img.icons8.com/nolan/64/html.png" data-toggle="tooltip" title="Html" alt="html" ></img>
              <img src="https://img.icons8.com/nolan/64/css-filetype.png" data-toggle="tooltip" title="CSS" alt="css"></img>
              <img src="https://img.icons8.com/nolan/64/js.png " data-toggle="tooltip" title="JavaScript" alt="JS"></img>
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" data-toggle="tooltip" title="Bootstrap" alt="Bootstrap"></img> 
              <img src="https://img.icons8.com/nolan/64/react-native.png" data-toggle="tooltip" title="React" alt="React"></img>
              <img src="https://img.icons8.com/nolan/64/ruby-programming-language.png" data-toggle="tooltip" title="Ruby" alt="Ruby" ></img>
              <img src="https://img.icons8.com/color/48/000000/postgreesql.png"  data-toggle="tooltip" title="PostegreeSQL"  alt="PostegreeSQL"></img>
              <img src="https://img.icons8.com/dusk/64/000000/ruby-gem.png" data-toggle="tooltip" title="Ruby on Rails" alt="Ruby on Rails"></img>
              </span>
         <br/>
         Identifying improved approaches and enhanced solutions to business challenges are activities that drive and inspire me. Exploration, pursuit, and motivation are my framework for success. I believe that fresh perspectives and trying new techniques help businesses evolve and grow. My goal is to be on the cutting-edge of industry advancements.

Contributions to my former Junior Web Developer role, and this field at-large, revolve around my essential  front-end and back-end  talents. I have developed strong communication abilities and fostered a reputation as a key contributor through collaboration and innovation skills. As a team player, I am collaborative with peers, searching for ways to integrate valuable insights. Through these qualities, I have confidence in my ability to facilitate positive change and collective effort.

         <br/>
            <Resume  />
            <Link style={{textDecoration:'none'}} to="./projects"> <i className="fas fa-long-arrow-alt-right"></i></Link>
            
      </Card.Text>
    </Card.Body>
  </Card>
      </div>    
        
      </>
    )
  }
}
export default Example