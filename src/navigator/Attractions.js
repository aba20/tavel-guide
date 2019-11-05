import React, { Component } from "react";
import axios from "axios";
import City from './City';



// class component
// constructor ===> create states
// componentDidMount ===> axios call
// redner 

class Attractions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: [],
            cityWeather: [],
            printWeather:[]
        }

    }

    componentDidMount() {
        axios.get('https://www.triposo.com/api/20190906/location.json?part_of=France&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type')
            .then(res => {

                this.setState({
                    cityName: res.data.results
                })
                this.getWeather()
            })
            .catch(err => {
                console.log(err);
            });


            
    }

    getWeather = () => {

        this.state.cityName.map((item, i)=> {

            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${item.name}&APPID=b835bb88562f14c7a763f8e2e693411a`)
            .then(res => {
                this.setState({
                    printWeather: res.data.main.temp - 273.15
                }) 
                this.setState({
                    cityWeather: [...this.state.cityWeather, this.state.printWeather]
                })
                console.log();
                
            })
            .catch(err => {
                console.log(err);
            });
        } )
    }
    render() {
        console.log(this.state.cityName)
        console.log(this.state.cityWeather);
        
        const cityLoop = this.state.cityName.map((item, index) => {
            return (
                <City name={item.name} snippet={item.snippet} key={index} />
            )
        });


        return (
            <div className='row'>
                {cityLoop}

                {this.state.printWeather}
            </div>

        )
    }

}


export default Attractions;
