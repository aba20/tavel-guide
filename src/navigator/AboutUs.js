import React, {Component} from "react";

class AboutUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.props.sendData(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Body:
          <input
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          ></input>
        </label>

        <button onClick={this.handleClick}>Send</button>
      </form>
    );
  

}; 

}

export default AboutUs;
