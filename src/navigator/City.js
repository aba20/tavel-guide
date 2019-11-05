import React, {Component} from 'react';


class City extends Component {
    render(){
    return(
     <div className="column">
         {this.props.printPhoto}
        <h1>{this.props.name}</h1>
       
        <h5>France</h5>
        <p>{this.props.snippet}</p> 
        <p>{this.props.printWeather} ºC </p>
    </div>
    )
    }
}

export default City;