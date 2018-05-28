import React, { PropTypes, Component } from 'react';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		// ...
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?t={}&apikey=b0cb780d')
			.then((response) => {
				response.json().then((data) => {
					this.setState({
						data
					})
				})
			})
		// 
		//    const result = $.ajax({
    // url: 'http://www.omdbapi.com/?i=tt3896198&apikey=b0cb780d'
		// 	url: 'http://www.omdbapi.com/'
		// 	data: {
		// 	  s: 'Batman',
		// 	  apikey: 'b0cb780d'
		// 	}
		//   });
		// 
	}

	render() {
		const movies = this.props.movies.map((movie) => {
			return <li key={movie.imdbID}>{movie.Title}</li>
		});

		return (
			<div>
				<input type="text" onChange={this.onSearch}/>
				<h1> Movie List </h1>
				{this.props.requestPending && 				
					<h3> Request Pending </h3>
			 	}

				{!this.props.requestPending && 
					<div>			
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

MovieList.propTypes = {
	onSearchChange: PropTypes.func.isRequired,
	movies: PropTypes.array.isRequired,
	onDidMount: PropTypes.func
};

export default MovieList;