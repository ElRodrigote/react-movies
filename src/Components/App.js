'use strict';

import React, { Component } from 'react';

//css
require('style-loader!./App.css');


class App extends Component {

	constructor() {
		super();
		this.state = {
			movies: [],
		}
		
	}

	componentWillMount(){
		fetch("http://localhost:8080/src/data.json")
		.then((res) => res.json())
		.then((data) => {
			this.setState({movies: data.movies});
		})
		.catch(console.log)
	}

	render(){
		let movies = this.state.movies;
		return (
			<div className="movie-list">
			{
				movies.map(movie => {
					return(
						<ul key={movie.id} className="movie-info">
							<li>{movie.title}</li>
							<li>{movie.year}</li>
							<li>{movie.synopsis}</li>
							<li><img src={movie['cover-url']} /></li>
						</ul>
					);
				})
			}
			</div>
		);
	}
}

export default App;