import React, { Component } from 'react'

class AddressBook extends Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			phone: '',
			address: '',
			output: ''
		}
	}
	render(){
		return(
			<div>
			Name: <textarea value={this.state.name} onChange={this.handleInputName}></textarea>
			<br />
			Email: <textarea value={this.state.email} onChange={this.handleChangeEmail}></textarea>
			<br />
			Phone: <textarea value={this.state.phone} onChange={this.handleChangePhone}></textarea>
			<br />
			Address: <textarea value={this.state.address} onChange={this.handleChangeAddress}></textarea>
			<br />
			<button onClick={this.handleButtonClick}>Save</button>
			<br />

			<p>*****Address Book*****</p>
			<p>{this.state.outputName}</p>
			<p>{this.state.outputEmail}</p>
			<p>{this.state.outputPhone}</p>
			<p>{this.state.outputAddress}</p>
			</div>

			)
	}
	handleInputName=(e)=>{
		this.setState({
			name: e.target.value
		})
	}
	handleChangeEmail=(e)=>{
		this.setState({
			email: e.target.value
		})
	}
	handleChangePhone=(e)=>{
		this.setState({
			phone: e.target.value
		})
	}
	handleChangeAddress=(e)=>{
		this.setState({
			address: e.target.value
		})
	}
	handleButtonClick=(e)=>{
		this.setState({
			outputName: this.state.name,
			outputEmail: this.state.email,
			outputPhone: this.state.phone,
			outputAddress: this.state.address
		})

	}
}

export default AddressBook
