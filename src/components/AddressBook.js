import React, { Component } from 'react'

let arr = []

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
			<fieldset>
			Name: <textarea value={this.state.name} onChange={this.handleInputName}></textarea>
			</fieldset>

			<br />
			<fieldset>
			Email: <textarea value={this.state.email} onChange={this.handleChangeEmail}></textarea>
			</fieldset>
			<br />

			<fieldset>
			Phone: <textarea value={this.state.phone} onChange={this.handleChangePhone}></textarea>
			</fieldset>
			<br />

			<fieldset>
			Address: <textarea value={this.state.address} onChange={this.handleChangeAddress}></textarea>
			</fieldset>
			<br />
			<button onClick={this.handleButtonClick}>Save</button>
			<br />


			<p>*****Address Book Details Below:*****</p>

			{arr.map((item, i)=>{
				return (<div key ={i}><span>{item}</span></div>)
			})}

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
		arr.push(
			'Name: ' + this.state.name,
			'Email: ' + this.state.email,
			'Phone: ' + this.state.phone,
			'Address: ' + this.state. address
			)
		

		this.state.name = ''
		this.state.email = ''
		this.state.phone = ''
		this.state.phone = ''
		this.state.address = ''

	}
}

export default AddressBook
