import React, { Component } from 'react'

class Messages extends Component{
	constructor(props){
	super(props)
	this.state = {
		inputMessage: '',
		outputMessage: ''
	 }
    }
	render(){
		return(
			<div>
				Message: <textarea value={this.state.inputMessage} onChange={this.handleInputMessage}></textarea>
				<br />
				<br />
				<button onClick={this.handleButtonClick}>Send</button>


				<p>******* Sent Messages ********</p>

				<p>{this.state.outputMessage}</p>
			</div>
			)
	}

	handleInputMessage=(e)=>{
		this.setState({
			inputMessage: e.target.value
		})
	}

	handleButtonClick=(e)=>{
		this.setState({
			outputMessage: this.state.inputMessage
		})
	}
}

export default Messages