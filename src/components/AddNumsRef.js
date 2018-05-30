import React, { Component } from 'react'

class AddNumsRef extends Component{
	constructor(props){
		super(props)
		this.state = {
			num1: '',
			num2: '',
			answer: ''
		}
	}
	render(){
		return(
		<div>
			Num1: <input type='number' ref='num1'/>
			<br />
			Num2: <input type='number' ref='num2'/>
			<br />
			<button onClick={this.handleClick}>Add</button>
			<br />
			<span>{this.state.answer}</span>

		</div>
		)
	}

	handleClick=()=>{
		this.setState({
			answer: parseInt(this.refs.num1.value, 10) + parseInt(this.refs.num2.value, 10)
		})
	}
}

export default AddNumsRef


