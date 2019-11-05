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
        axios.get('https://api.unsplash.com/search/photos/?query=office&client_id=34f1e88073a5b17fd090cb0cd2ec8a8d4e067b0b3214ce3e34452efc8d448872')
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