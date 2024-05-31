import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && movies.popularMovies &&(
    <div className='bg-black'>
      {/* <h1>SecondaryContainer</h1> */}
      
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      {/* <MovieList title={"Only on netflix"} movies={movies.nowPlayingMovies}/> */}
      </div>
    </div>
    )
  );
}

export default SecondaryContainer

/* 
Plan
Movielist - Popular
  MovieCard * n
Movielist - Now Playing
Movielist - Trending
Movielist - genere related
....

*/