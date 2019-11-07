import React, {Component} from "react";



class AboutUs extends Component{
  constructor(props){
    super(props)
    this.state = {
      feedback: [],
      newfeedback: "",
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
  delItem(e){
   
    let feed = [...this.state.feedback]
    let i = feed.indexOf(e)
    feed.splice(i,1)

    
    this.setState({ feedback: feed})  
}

  render () {

    
    const feedback = this.state.feedback.map(item => {
      return (
        <div>
      <p>{item}</p>
      <button onClick={this.delItem.bind(this, item)}> <h6>DELETE</h6> </button>
      </div>
      )
    })
    return(
      <div>
        <h2>About Us</h2>
        <p>This was made for propject two</p>

        <h3>Contact</h3>
        <p>You can reach us at <a href='./errors.js'>this page</a> or this email: example@email.com</p>
        <h3> Feedback</h3>
        <p><input type='text' placeholder='Write your feedback' value={this.state.newfeedback} name='newfeedback' onChange={this.handleInputChange}/></p>
        <p><button className="btn btn-lg btn-primary" onClick={this.handleClick}>Send Feedback</button></p>
        {feedback}
        

      </div>
    )
  }

}

export default AboutUs;
