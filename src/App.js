import  React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';
import './assets/button.css'
import './assets/styles.css'
import Introduction from './Introduction'
import Home from './Home.js'
import NavigationBar from './components/NavigationBar'
import Projects from './components/Projects'
import Footer from './components/Footer';

class App extends Component{
  state = {};
 
  render(){

   return(
    <BrowserRouter>
    <NavigationBar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route  exact path="/intro" component={Introduction} />
    <Route  exact path="/projects" component={Projects}  />
    </Switch>
    <Footer />
   </BrowserRouter>
   )
 }
}

 
export default App;