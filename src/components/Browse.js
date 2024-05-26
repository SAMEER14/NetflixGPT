import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  //using custom hook and then using api data here
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      {/* <h1>browse</h1> */}
      <Header />

      {/* 
        Main Container
         -Videobackground
         -videoTitle
        Secondary Container
          -MoviesList * n
            -Cards * n
      */}
      <MainContainer />
      <SecondaryContainer />


    </div>
  )
}

export default Browse;
