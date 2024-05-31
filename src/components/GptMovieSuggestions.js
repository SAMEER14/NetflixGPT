import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {

  //get movie names and results
  // const gpt = useSelector(store => store.gpt);
  // const { movieNames, movieResults } =  gpt;
  //in single line
  const { movieNames, movieResults } = useSelector(store => store.gpt);
    
  if(!movieNames) return null;


  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
       <div>
        
        {/* {movieNames} */}
        {/* {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))} */}

        {/* Using same component to show movies on page as browse page 
        RESUSABILITY OF COMPONENT */}
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}

        {/* if we go to home page and then click on gpt search the results are still there because it is access it from store 
        We can clear it but clearing the slice data dispatch action*/}
      </div>
    </div>
  )
}

export default GptMovieSuggestions;
