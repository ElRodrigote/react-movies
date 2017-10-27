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

	drawStars(arg){
		return new Array(arg);
	} 

	render(){
		let movies = this.state.movies;
		return (
			<ul className="movie-list">
			{
				movies.map(movie => {
					let score = Math.round(movie.score*10);
					return(
						<li key={movie.id} className="movie-wrapper">
							<div className="movie-image">
								<a href={movie["url"]} target="_blank">
									<img src={movie['cover-url']} />
								</a>
							</div>
							<div className="movie-id">{movie.id}.</div>
							<div className="movie-info">
								<b>
									<a href={movie["url"]} target="_blank">{movie.title}</a>
									<span className="movie-info-year">({movie.year})</span>
								</b>
								<h3 className="movie-info-title"></h3>
								<div className="movie-info-synopsis">{movie.synopsis} ({movie["runtime-in-minutes"]} mins.)</div>
								<div className="movie-info-rating">{this.drawStars(score).length}</div>
								{/*this.drawStars({score})
									.map(star => {
										return(
											<span key={movie.id} className="fa fa-star fa-fw"></span>
										);
									})
								*/}
							</div>
						</li>
					);
				})
			}
			</ul>
		);
	}
}

export default App;