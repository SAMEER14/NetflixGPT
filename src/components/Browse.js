import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  //we will useSelector to access gptsearch boolean value form store
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  //using custom hook and then using api data here
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      {/* <h1>browse</h1> */}
      <Header />

      {/* when gptsearch is true then show it otherwise donot show and show main and secondary container */}
      {/* <GptSearch /> */}

      {
        showGptSearch ? (
          <GptSearch /> 
        ) : ( 
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )  
      }

      {/* 
        Main Container
         -Videobackground
         -videoTitle
        Secondary Container
          -MoviesList * n
            -Cards * n
      */}
      {/* <MainContainer />
      <SecondaryContainer /> */}


    </div>
  )
}

export default Browse;
