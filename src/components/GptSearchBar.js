import React, { useRef } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {

    const dispatch = useDispatch();

    //we will get lang from useSelector store
    const langKey = useSelector(store => store.config.lang);

    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
       movie +
       "&include_adult=false&language=en-US&page=1", API_OPTIONS);

       const json = await data.json();
       return json.results;
    }


    const handleGPTSearchClick = async () => {
      //this will take data from the search box
      //multiple ways to take data but we will use useRef
      console.log(searchText.current.value);
      //make an api call to gpt api to get movies results

      const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + 
      searchText.current.value + 
      "only give me names of 5 movies, comma seperated like the example results given ahead. Example Result :Golmal , Golmal 2, Hera pheri , Phir hera pheri, Bhagam bhag";
      //api results are dumb so be clear when giving prompt , they are DUMB

      const gptResults = await openai.chat.completions.create({
        // messages: [{ role: 'user', content: searchText.current.value }],
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      /*
      //first runing this api gives a warning that chat gpt tell we are calling this api from frontend side client side not the server side
      //and on client side the secrest can be leaked , that is api key can be compromised
      //best practice is to do from backend
      //to use in frontend we need to set flag to true
      */
      // console.log(gptResults.choices);
      // console.log(gptResults.choices?.[0]?.message?.content);

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ")
      console.log(gptMovies);

      //for each movie now we will search movie in tmdb api and extract data
      // we will create a function for search each movie in TMDB api - searchMovieTMDB
      //How we will search for each movie => but we have to pass all movie -> so we can do with map function or reduce function for passing all movies
      
      // const data = gptMovies.map(movie => searchMovieTMDB(movie));
      /*This will not work because it is async function ->searchMovieTMDB() it will take time to get results , but it returns array of promise -> promise take some time to resolve and TIME TIDE WAITS FOR NONE
        //UNDERSTAND PROMISE FOR MORE UNDERSTANDING
        returns promise array -> [Promise, Promise, Promise, Promise, Promise]
        => to get this data -> 
      */
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      //await so that program wait for promises to resolve
      console.log(tmdbResults);

      // NOW WE GOT THE DATA, NOW WE CAN PUSH THE DATA IN STORE AND EXTRACT FROM THERE AND USE IT
      //putting it in gpt slice, so create initial state and reducer and then dispatch an action to store it in redux store
      // dispatch(addGptMovieResult(tmdbResults)); //this adds our tmdbResults in store

      //passing 2 different data then pass as object
      dispatch(addGptMovieResult(
        {
          movieResults: tmdbResults,
          movieNames: gptMovies
        }
        ));



      // if(!gptResults.choices) not present do error handling
      // if(!gptResults.choices)
      
    }

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input 
        ref={searchText}
        type="text" 
        className='p-4 m-4 col-span-9'
        // placeholder='What you want to watch today?' 
        // placeholder= {lang.langKey.gptSearchPlaceholder} 
        //passing dynamic langKey
        placeholder= {lang[langKey].gptSearchPlaceholder}
        />
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGPTSearchClick}>
            {/* Search */}
            {lang[langKey].search}
        </button>
      </form>
    </div> 
  )
}

export default GptSearchBar;
