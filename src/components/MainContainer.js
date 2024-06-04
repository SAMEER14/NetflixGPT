import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
//   this movies give 20 movies data from api
    // if(movies === null) return;
    //this is also known as early return
    // or can do this 
    if(!movies) return;

//  from 20 we need 1 main movie to display 
    const mainMovie = movies[0];
    // console.log(mainMovie);
    //first time will give error ad mainMovie is null , therefore error comes
    //adding null condition above

    const { original_title, overview, id } = mainMovie;
    // console.log(id);

return (
    <div className='pt-[30%] bg-black md:pt-0'>
      {/* <h1>MainContainer</h1> */}
      {/* 2 component video title , video background */}
      
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />

    </div> 
  )
}

export default MainContainer
