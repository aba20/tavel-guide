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
            printWeather: [],

            cityPhoto: [],
            printPhoto: [],
            cityLoop:[],
        }
    }

    componentDidMount() {
        axios.get('https://www.triposo.com/api/20190906/location.json?part_of=France&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type')
            .then(res => {

                this.setState({
                    cityName: res.data.results
                })
                this.getWeather()
                this.getPhoto()
            })
            .catch(err => {
                console.log(err);
            });
    }

    getWeather = () => {
        this.state.cityName.map((item, i) => {

            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${item.name}&APPID=b835bb88562f14c7a763f8e2e693411a`)
                .then(res => {
                    this.setState({
                        printWeather: Math.round(res.data.main.temp - 273.15),
                        cityWeather: [...this.state.cityWeather, this.state.printWeather],
                        cityLoop:[...this.state.cityLoop, <City name={item.name} snippet={item.snippet} key={i} printWeather={Math.round(res.data.main.temp - 273.15)} />],
                    })
                    // console.log();

                })
                .catch(err => {
                    console.log(err);
                });
        })
    }
    getPhoto = () => {
        // console.log("ddddddd");
        // console.log(this.state.cityPhoto);
        // console.log(this.state.cityName);
        
        this.state.cityName.map((item, i) => {

            axios.get(`https://pixabay.com/api/?key=14172593-bc3af3ba1e2e832408b48aaa2&q=${item.name}&image_type=photo`)
                .then(res => {
                    console.log(res.data.hits[0].webformatURL);
                    
                    // this.setState({
                    //     printPhoto: res.data.hits[0].webformatURL
                    // })
                    this.setState({
                        // cityPhoto: [...this.state.cityPhoto, this.state.printPhoto],
                        // cityLoop:[...this.state.cityLoop, <City name={item.name} snippet={item.snippet} key={i} printPhoto={res.data.hits[0].webformatURL}/>],
                        cityPhoto: [...this.state.cityPhoto, res.data.hits[0].webformatURL]
                    })
                    // console.log();
                })
                .catch(err => {
                    console.log(err);
                });
        })
    }


    render() {
        // console.log(this.state.cityWeather);
        console.log(this.state.cityPhoto);


        const cityLoop = this.state.cityName.map((item, index) => {
            const temp = this.state.cityWeather[index]
            const photo = this.state.cityPhoto[index]

            // console.log(this.state.cityWeather[index])
            console.log(photo)
            // console.log('index', index);

            return (
                <City  name={item.name} printPhoto={photo} snippet={item.snippet} key={index} printWeather={temp}  />
            )
        });


        return (
            <div className='row'>
                {cityLoop}
            </div>

        )
    }

}


export default Attractions;
