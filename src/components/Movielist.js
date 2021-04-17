import React from 'react'
import  "./css/movieList.css"

const images = "https://image.tmdb.org/t/p/w500/"


function Movielist({ original_title, poster_path, overview, vote_average }) {
    return (
    <div className="movie">
        <div className="movie-card">

            {/* movie-poster */}
            <img className="movie-poster" src={ images + poster_path} alt="poster of movie"/>
        
            {/* movie-title */}
            <div className="movie-info">
            <h2 className="movie-title">{original_title}</h2>
            {/* movie-average */}
            <p className="movie-average"><b>{vote_average}</b></p>
            </div>

            {/* movie-overview */}
            <div className="movie-overview">
            <p className="overview-text"> {overview} </p>
            </div>

        </div>
    </div>
    )
};

export default Movielist;
