import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityWeather: []
        }
    }

    componentDidMount() {   //                           after   ?q= i put ${name}  didn't work
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=&APPID=b835bb88562f14c7a763f8e2e693411a`)
            .then(res => {
                this.setState({
                    cityWeather: res.data.main.temp - 273.15
                })
                
            })
            .catch(err => {
                console.log(err);
            });
    }


    render() {


        return (
            <></>
//             <div>
// *             {cityWeather}
//             </div>
        )
    };
}
export default Weather;