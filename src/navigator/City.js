import React from 'react';


const City = props => {
    return(
     <div className="column">
         {props.printPhoto}
        <h1>{props.name}</h1>
       
        <h5>France</h5>
        <p>{props.snippet}</p> 
        <p>{props.printWeather} ºC </p>
    </div>
    )
}

export default City;