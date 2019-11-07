import React, {Component} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/Users/mac/Desktop/sei/projects/project #2/travel_guid/src/App.css'
class Home extends Component {
  render(){
  return (

    
    <div className='homebg'>
   
        <nav className="navbar navbar-dark bg-dark">
         <Link className="flex-sm-fill text-sm-center nav-link active" to="/"> Home </Link> 
         <Link className="flex-sm-fill text-sm-center nav-link" to="/attractions"> Attractions </Link>
         <Link className="flex-sm-fill text-sm-center nav-link" to="/aboutus"> About Us </Link>
      </nav> 
      <img src='https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'/>
    </div>
  );
};
}
export default Home;
