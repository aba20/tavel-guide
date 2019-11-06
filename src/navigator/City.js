import React, {Component} from 'react';


class City extends Component {
    render(){
        console.log(this.props)
    return(
     <div className="card">
         {/* {this.props.printPhoto} */}
        <h1 className="card-title">{this.props.name}</h1>
       <img src={this.props.printPhoto} className="card-img-top"/>
        <h5>France</h5>
        <div className="card-body">
        <p className="card-text">{this.props.snippet}</p> 
        <p>{this.props.printWeather} ºC </p>
        </div>
    </div>
    )
    }
}

export default City;