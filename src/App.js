import React, {Component} from "react";
import "./App.css";
import Home from "./navigator/Home";
import Attractions from "./navigator/Attractions";
import AboutUs from "./navigator/AboutUs";
import Errors from "./navigator/Errors";
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component{

  render() {
    return(
    <Router>
      
     <nav><Link className="flex-sm-fill text-sm-center nav-link active" to="/"> Home </Link> </nav>
    
 
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/aboutus' component={AboutUs} />
          <Route path="/attractions" component={Attractions} />
          <Route component={Errors} />
        </Switch>
      </div>
    </Router>
    )};
}

export default App;
