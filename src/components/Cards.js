import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import CruiseBuddy  from '../assets/cruisebuddy.jpg'
import dogfinder from '../assets/dogfinder.jpg'
import Clipboard from '../assets/clipboard.jpg'
import Portfolio from '../assets/portfolio.jpg'
function Cards(){
   
    
     return(

   <>
   
   <CardDeck >
    
        <Card     className="card_project" style={{ width: '18rem' }} >
        <Card.Img   variant="top" src={CruiseBuddy} />
        <Card.Body>
          <Card.Title > CruiseBuddy<a href="https://www.cruisebuddy.app/"><i class="fas fa-link" style={{fontSize: '5px'}}></i> </a></Card.Title>
          <Card.Text>
          Two applications in one, back-end in Ruby on Rails and Front-end in ReactJS. Cruisebuddy is a plataform built to users rating and share cruise experience!
          </Card.Text>
          <a variant="primary" data-toggle="tooltip" title="github/Cruisebuddy.app"><i class="fab fa-github-alt" style={{color:'white'}}  ></i></a>
        </Card.Body>
    </Card>
    <Card   className="card_project" style={{ width: '18rem'}}>
        <Card.Img     variant="top" src={dogfinder} />
        <Card.Body>
          <Card.Title>DogFinder</Card.Title>
          <Card.Text> 
          A Webapplication created in team collaboration. The goal is connect users looking for dogs in adoption. The App was  built in ReactJS pulling data from a API 
          </Card.Text>
          <a variant="primary" href="https://github.com/vaznatalia/DogFinder" data-toggle="tooltip" title="github/DogFinder" ><i class="fab fa-github-alt" style={{color:'white'}}  ></i></a>
        </Card.Body>
    </Card>
    {/* <Card   className="card_project"style={{ width: '18rem', }}>
        <Card.Img variant="top" src={Clipboard}  />
        <Card.Body>
          <Card.Title>Clipboard</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <a variant="primary">Go somewhere</a>
        </Card.Body>
    </Card> */}
    <Card   className="card_project"style={{ width: '18rem', }}>
        <Card.Img variant="top" src={Clipboard}  />
        <Card.Body>
          <Card.Title>Clipboard</Card.Title>
          <Card.Text>
            My first Website Project created from a Mockup with HTML 5,Grid CSS, Flexbox and Masonry Layout.
           
          </Card.Text>
          <a variant="primary" data-toggle="tooltip" title="github/Clipboard" href="https://github.com/vaznatalia/Mockup-project"><i class="fab fa-github-alt" style={{color:'white'}}  ></i></a>
        </Card.Body>
    </Card>
    <Card   className="card_project"style={{ width: '18rem', }}>
        <Card.Img variant="top" src={Portfolio}  />
        <Card.Body>
          <Card.Title>Portfolio</Card.Title>
          <Card.Text>
            Portfolio built in ReactJS where you can see projects I worked during my time at Wyncode Academy  and my skills as Web Developer
          </Card.Text>
          <a variant="primary" data-toggle="tooltip" title="github/Portfolio" href="https://github.com/vaznatalia/Portfolio"><i class="fab fa-github-alt" style={{color:'white'}}  ></i></a>
        </Card.Body>
    </Card> 
    </CardDeck>
   
    </>  
     )
 }
 export default Cards