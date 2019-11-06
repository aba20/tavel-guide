import React, {Component} from "react";


class AboutUs extends Component{
  constructor(props){
    super(props)
    this.state = {
      feedback: [],
      newfeedback: ""
    }

  }
  handleClick = (event) => {
    event.preventDefault()
    const data = this.state.newfeedback
    this.setState({
      feedback: [...this.state.feedback, data]
    })

  } 

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      newfeedback: event.target.value
    })
  }
  delete(newfeedback){
    this.setState(this.state.newfeedback)
}

  render () {
    console.log(this.state);
    
    const feedback = this.state.feedback.map(item => {
      return <h1>{item}</h1>
    })
    return(
      <div>
        <h1>About Us</h1>
        <p>We are do the second project of SEI </p>

        <h2>Contact</h2>
        <p>You can reach us at this page or this email: example@email.com</p>
        <h2> feedback</h2>
        <p><input type='text' placeholder='Write your feedback' value={this.state.newfeedback} name='newfeedback' onChange={this.handleInputChange}/></p>
        <p><button className="btn btn-lg btn-primary" onClick={this.handleClick}>Send Feedback</button></p>
        {feedback}
        

      </div>
    )
  }

}

export default AboutUs;
