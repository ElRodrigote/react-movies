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
		let score = Math.round(this.state.movies.score * 10);
		let stars = (arg) => new Array(arg);
		return (
			<div className="movie-list">
			{
				movies.map(movie => {
					return(
						<div key={movie.id} className="movie-info">
							<span>{movie.id}.</span>
							<span>{movie.title}</span>
							<span>({movie.year})</span>
							{stars({score})
								.map(star => {
									return(
										<i key={movie.id} className="fa fa-star fa-fw"></i>
									);
								})
							}
							
							<div>{movie.synopsis}</div>
							<div><img src={movie['cover-url']} /></div>
						</div>
					);
				})
			}
			</div>
		);
	}
}

export default App;