import  React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';
import './assets/button.css'
import Introduction from './Introduction'
import Home from './Home.js'
import NavigationBar from './components/NavigationBar'

class App extends Component{
  state = {};
 
  render(){

   return(
    <BrowserRouter>
    <NavigationBar />
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route  exact path="/intro" component={Introduction} />
    </Switch>
   </BrowserRouter>
   )
 }
}

 
export default App;