import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Icons from './components/Icons'

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
     
       <p className="animatedLetter"> ESCAPE INTO AMAZING EXPERIENCES</p>
      <i onMouseEnter={this.handleEnter.bind(this)}
              class="fas fa-angle-double-down"></i>
       {this.state.isHovered ? (
         <div className="center">

<Card className="boxx" style={{ width: '52rem' }}>
    <Card.Header>Introduction</Card.Header>
    <Card.Body>
      <Card.Title style={{fontFamily:'Open Sans Condensed, sans-serif Vidaloka, serif'
}} >Each brand has a story to tell, an emotion to convey, a message to share. <br/></Card.Title>
      <Card.Text style={{fontSize: '15px'}}>

      I'm a creative Full Stack Web Developer Junior. I am very passionated about everthing that involves technology I graduated at Wyncode Academy in Mami-FL, where I'm currently based.
        <br/>
        
        These are some languages, frameworks, libraries and tools  I've learned and used so far:
   <br/>   
            <div className="icons-intro"> 
            <img src="https://img.icons8.com/nolan/64/html.png" data-toggle="tooltip" title="Html" ></img>
              <img src="https://img.icons8.com/nolan/64/css-filetype.png" data-toggle="tooltip" title="CSS"></img>
              <img src="https://img.icons8.com/nolan/64/js.png " data-toggle="tooltip" title="JavaScript" ></img>
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png" data-toggle="tooltip" title="Bootstrap"></img>
              <img src="https://img.icons8.com/nolan/64/react-native.png" data-toggle="tooltip" title="React"></img>
              <img src="https://img.icons8.com/nolan/64/ruby-programming-language.png" data-toggle="tooltip" title="Ruby"></img>
              <img src="https://img.icons8.com/color/48/000000/postgreesql.png"  data-toggle="tooltip" title="PostegreeSQL"></img>
              <img src="https://img.icons8.com/dusk/64/000000/ruby-gem.png" data-toggle="tooltip" title="Ruby on Rails"></img>
              </div>
         <br/>
              
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
          {/* <div class="card-project boxx">
            <p>
            Each brand has a story to tell, <br/>an emotion to convey, a message to share. <br/>
            

              I'm a creative Full Stack Web Developer Junior <br/> 
              who loves animation and work with React. <br/>
              I graduated at Wyncode Academy in Mami-FL<br/> where I'm currently 
              based.<br/> 
             

              These are the languages, frameworks, libraries and tools <br/> I've learned and used so far: <br/>
              <img src="https://img.icons8.com/nolan/64/html.png" data-toggle="tooltip" title="Html" ></img>
              <img src="https://img.icons8.com/nolan/64/css-filetype.png"></img>
              <img src="https://img.icons8.com/nolan/64/js.png"></img>
              <img src="https://img.icons8.com/color/48/000000/bootstrap.png"></img>
              <img src="https://img.icons8.com/nolan/64/react-native.png"></img>
              <img src="https://img.icons8.com/nolan/64/ruby-programming-language.png"></img>
              <img src="https://img.icons8.com/dusk/64/000000/ruby-gem.png"></img>
              <br/>
              I'm enrolled in React Native and Scrum Master specialization
            </p>
         
           <Link style={{textDecoration:'none'}} to="./projects"> <i class="fas fa-long-arrow-alt-right"></i></Link>
      
          </div>    */}
          </div>  
               ) : (
            <div />
          )}
        
        {/* <Particles style={{zIndex:'-1'}} /> */}
       
      
        
 
</>
    )
  }
}
export default Example