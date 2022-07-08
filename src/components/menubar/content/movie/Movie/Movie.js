import React, { useState,useEffect } from "react";
import '../Movie/Movie.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=b00f73fb";

//buat test template card di awal
const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": 'N/A'
}

const Movie = () => {

  //Membuat useState dengan data array untuk menampung data di API
  const[movies, setMovies] = useState([])
  const[searchTerm, setSearchTerm] = useState('')

  //pertama bikin searchMovies
  const searchMovies = async (title) => {
    //lalu bikin function untuk fetch data api
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log('ini adalah' + data.Search)

    //masukin data kedalam movies
    setMovies(data.Search)
  };

  //membuat useEffect
  useEffect(() => {
    searchMovies('spiderman')
  }, []);

  return (
    <div className="app-movie">
      {/* Title */}
      <h1>ArlMovies</h1>

      {/* Search */}
      <div className="search">
          <input
            placeholder="search for movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          />
      </div>

          

      {
        movies?.length > 0 
        ? (
          <div className="container">
            {/* <MovieCard movie1={movie1} /> */}
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }

    </div>
  );
};

export default Movie;
