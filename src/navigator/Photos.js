import React, { Component } from 'react';
import Axios from 'axios';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityPhoto: []
        }
    }

    componentDidMount() {
        axios.get('https://pixabay.com/api/?key=14172593-bc3af3ba1e2e832408b48aaa2&q=Riyadh&image_type=photo')
            .then(res => {
                this.setState({
                    cityPhoto: res.data.urls.small

                })

            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>

            </div>
        )
    }


}

export default Photos;