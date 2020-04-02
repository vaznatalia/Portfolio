import React from "react"
import './App.css'
import Botao from "./components/Botao"
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);
function Home (props) {
  
  return (
    <>
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
   
    <p className="popout">
    <span>HELLO WORLD</span><br/> 
    <span>I'M NATALIA</span><br/>
    <span> WEB DEVELOPER</span>
    <span></span>
    <span></span><br/>

    </p>
   
   <div>
    <Botao />
   </div>
    </>
    )
}
 
export default Home;

  