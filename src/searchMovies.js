import React, { useState } from "react";
import MovieCard from './movieCard.js';
require('dotenv').config();

export default function SearchMovies(){

    // states - input query, SearchMovies
    const [query, setQuery] = useState('');

    // state for movies, and update that state
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const api = process.env.REACT_APP_MOVIEDB_API; // Replace 'process.env.REACT_APP_MOVIEDB_API' with your api key

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${query}&page=1&include_adult=false`;

        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie: </label>
                <input className="input" type="text" name="query" 
                        placeholder="i.e. The Fifth Element" 
                        value={query} onChange={(e) => setQuery(e.target.value)}
                        />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}