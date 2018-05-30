import React, { Component } from 'react'

class AddNums extends Component{
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
			Num1: <textarea value={this.state.num1} onChange={this.handleChangeNum1}></textarea>
			<br />
			Num2: <textarea value={this.state.num2} onChange={this.handleChangeNum2}></textarea>
			<br />
			<button onClick={this.handleClick}>Add</button>
			<br />
			<span>{this.state.answer}</span>

		</div>
		)
	}
	handleChangeNum1=(e)=>{
		this.setState({
			num1: e.target.value
		})
	}

	handleChangeNum2=(e)=>{
		this.setState({
			num2: e.target.value
		})
	}

	handleClick=()=>{
		this.setState({
			num1: this.state.num1,
			num2: this.state.num2,
			answer: parseInt(this.state.num1, 10) + parseInt(this.state.num2, 10)
		})
	}
}

export default AddNums


