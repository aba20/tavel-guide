import React, {Component} from "react";
import "./App.css";
import Home from "./navigator/Home";
import Attractions from "./navigator/Attractions";
import AboutUs from "./navigator/AboutUs";
import Errors from "./navigator/Errors";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends Component{

  render() {
    return(
    <Router>
      <nav>
        <Link to="/">Home</Link>{'    '}
        <Link to="/attractions">Attractions</Link>{'   '}
        <Link to="/aboutus">AboutUs</Link>
      </nav>
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
