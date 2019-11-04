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
            cityName: []
        }

    }

    componentDidMount() {
        axios.get('https://www.triposo.com/api/20190906/location.json?part_of=France&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type')
            .then(res => {

                this.setState({
                    cityName: res.data.results
                })
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        console.log(this.state.cityName)
        const cityLoop = this.state.cityName.map((item, index) => {
            return (
                <City/>

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
