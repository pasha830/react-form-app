import React, { Component } from 'react'
//import $ from 'jquery'
import axios from 'axios'

class LifecycleApp extends Component{
	constructor(props){
		super(props)
		this.state = {
			users: []
		}
	}

	componentDidMount(){
		//to use jquery below will start: $.get .....
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((data)=>{
			console.log(data)
			this.setState({
				users: data.data
			})
		})
	}
	render(){
		return(
			<div>
			{
				this.state.users.map((item, i)=>{
					return(<div key={i}> 
						<strong>Name: </strong>{item.name}, <br/> 
						<strong>Email: </strong>{item.email} <br/>
						<hr/>
						</div>
						)
				})
			}
			</div>





			)
	}
}

export default LifecycleApp