import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  // console.log(movies);
    return (
      // movies.nowPlayingMovies && (
    <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>      
            <div className='flex'>
                {/* <MovieCard posterPath={movies[0].poster_path}/> */}
                {
                    movies.map(movie => 
                    <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                    )
                }
            </div>
        </div>
      
      {/* will have multiple cards */}
    </div>
      // )
  )
}

export default MovieList
