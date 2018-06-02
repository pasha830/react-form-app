import React, { Component } from 'react'
//import $ from 'jquery'
import axios from 'axios'

class MovieApp extends Component{
	constructor(props){
		super(props)
		this.state = {
			result: []
		}
	}

	componentDidMount(){
		//to use jquery below will start: $.get .....
		axios.get('http://www.omdbapi.com',
					{
				params: {
					apikey: '60f7bdd3',
					t: 'titanic'
				}
			}
		)
		.then((data)=>{
			console.log(data)
			this.setState({
				result: data.data
			})
		})
	}
	render(){
		return(
			<div>
					<img src={this.state.result.Poster} />
					<br/>
					<strong>Title: </strong> {this.state.result.Title} 
					<br/>
					<strong>Actors: </strong> {this.state.result.Actors} 
					<br/>
					<strong>Year: </strong> {this.state.result.Year} 
					<br/>
					<strong>Director: </strong> {this.state.result.Director} 
					<br/>
			</div>
			  )
			}		
}

export default MovieApp