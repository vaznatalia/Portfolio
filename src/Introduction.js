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
     
       <h1 className="animatedLetter"> ESCAPE INTO AMAZING EXPERIENCES</h1>
     
         <div className="center">

<Card className="boxx" style={{ width: '52rem' }}>
    <Card.Header>Introduction</Card.Header>
    <Card.Body>
      <Card.Title style={{fontFamily:'Open Sans Condensed, sans-serif Vidaloka, serif'
}} >Each brand has a story to tell, an emotion to convey, a message to share. <br/></Card.Title>
      <Card.Text style={{fontSize: '15px'}}>

      I'm a creative Full Stack Web Developer Junior,  passionated about everthing that involves technology. I recent  graduated at <a href="https://wyncode.co/">Wyncode</a> Academy in Mami-FL, where I'm currently based.<br/>
      I'm from Brazil and also have a large  background as Pedagogy Educator. 
  
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
            I'm enrolled to learn React Native and specialize in Scrum Master 
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