import React, { useEffect, useState } from "react";
import "./App.css";
import Movielist from "./components/Movielist";

const api_key = process.env.REACT_APP_API_KEY;
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=`;


function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(() => {
    fetch(popular)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
      })

  }, [])

  // INPUT SUBMIT
  const handleOnSubmit = (e) => {
  e.preventDefault();

  fetch(searchApi + searchQuery)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.results);
    });
  };

  // INPUT CHANGE
  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="App">

      <header>
    
      <h1>Movie Searcher App</h1>
      <p>World premier of the best movie search app. This app is built using imdb api.</p>

      {/* search function */}
            <form className="search-bar" onSubmit={handleOnSubmit}>
            <input 
            className="search-field"
            type="text"
            placeholder="Search Movies"
            value={searchQuery}
            onChange={handleOnChange} />
            </form>

      </header>




      {/* display popular */}
      <div className="movie-container">
      {movies.map((movie) => (
        < Movielist key={movie.id} {...movie} />
      ))}
      </div>

      <footer><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"/></footer>
    </div>
  );
}

export default App;