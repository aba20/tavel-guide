import React from 'react';


const City = props => {
    return(
     <div className="column">
        <h1>{props.name}</h1>
        <h5>France</h5>
        <p>{props.snippet}</p>
    </div>
    )
}

export default City;